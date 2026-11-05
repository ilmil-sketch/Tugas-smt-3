const userContainer = document.querySelector('#user-container');
const loading = document.querySelector('#loading');
const btnSearch = document.querySelector('#search-btn');
const userInput = document.querySelector('#username-input');
const btnRefresh = document.querySelector('#refresh-btn');

const loadGithubUser = async (username) => {
    if (!username) {
        userContainer.innerHTML = "<p class=\"error\">.</p>";
        return;
    }

    try {
        userContainer.innerHTML = '';
        loading.style.display = 'block';
        const response = await fetch(`https://api.github.com/users/${username}`);

        if (!response.ok) {
            if (response.status === 404) {
                throw new Error("User tidak ditemukan.");
            }
            throw new Error("HTTP Error! Status: " + response.status);
        }

        const user = await response.json();
        const card = document.createElement("div");
        card.className = "user-card";
        card.innerHTML = `
            <h4>${user.name || user.login}</h4>
            <P>Bio: ${user.bio || "-"}</p>
            <p>Email: ${user.email || "-"}</p>
            <P>Lokasi: ${user.location || "-"}</p>
            <small>Public Repositories: ${user.public_repos || 'N/A'}</small>
        `;
        userContainer.appendChild(card);
    } catch (error) {
        console.error("Gagal mengambil data pengguna:", error);
        userContainer.innerHTML = "<p class=\"error\">Gagal memuat data: " + error.message + "</p>";
    } finally {
        loading.style.display = 'none';
    }
}

btnSearch.addEventListener('click', () => {
    const username = userInput.value.trim();
    if (username) {
        loadGithubUser(username);
    }
});

userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        loadGithubUser(userInput.value.trim());
    }
});

btnRefresh.addEventListener('click', () => {
    const username = userInput.value.trim();
    if (username) {
        loadGithubUser(username);
    }
});

loadGithubUser(userInput.value.trim());
