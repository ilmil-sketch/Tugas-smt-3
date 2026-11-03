const userContainer = document.querySelector('#user-container');
const loading = document.querySelector('#loading');
const searchForm = document.querySelector('#search-form');
const githubInput = document.querySelector('#github-input');

const loadDataUser = async (username) => {
    try {
        userContainer.innerHTML = '';
        loading.style.display = 'block';

        const response = await fetch(`https://api.github.com/users/${username}`);
        if (response.status === 404) {
            userContainer.innerHTML = '<p class="error">User not found</p>';
        }
        if (!response.ok) {
            throw new Error('HTTP error! status: ' + response.status);
        }

        const user = await response.json();

        //elemen card profil
        const card = document.createElement('div');
        card.className = 'profile-card';
        card.innerHTML = `
          <img src="${user.avatar_url}" alt="Avatar">   
          <h4>${user.name || user.login}</h4>
          <p>${user.bio || 'No bio'}</p>
          <small>Repositori Publik: <b>${user.public_repos}</b></small><br>
          <a href="${user.html_url}" target="_blank">Buka Profile Github</a>
        `;

        userContainer.appendChild(card);

    } catch (error) {
        console.error("Gagal ambil data pengguna:", error);
        userContainer.innerHTML = '<p class="error">Gagal memuat data: ${error.message}</p>';
    } finally {
        loading.style.display = 'none';
    }   
};

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = githubInput.value.trim();
    if (username) {
        loadDataUser(username);
    }   
});