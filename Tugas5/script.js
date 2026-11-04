const searchForm = document.querySelector('#search-form');
const usernameInput = document.querySelector('#username-input');

const loadingEl = document.querySelector('#loading');
const errorEl = document.querySelector('#error-msg');
const profileResult = document.querySelector('#profile-result');

const avatarEl = document.querySelector('#avatar');
const nameEl = document.querySelector('#name');
const bioEl = document.querySelector('#bio');
const reposEl = document.querySelector('#public-repos');
const linkEl = document.querySelector('#profile-link');

searchForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = usernameInput.value.trim();
  if (!username) return;

  // Reset tampilan
  profileResult.style.display = 'none';
  errorEl.style.display = 'none';
  loadingEl.style.display = 'block';

  try {
    const response = await fetch(`https://api.github.com/users/${encodeURIComponent(username)}`);

    // Tangani kondisi 404 (User tidak ditemukan)
    if (response.status === 404) {
      throw new Error('User tidak ditemukan');
    }

    if (!response.ok) {
      throw new Error(`Terjadi kesalahan: ${response.status}`);
    }

    const data = await response.json();

    // Isi data profil
    avatarEl.src = data.avatar_url;
    nameEl.textContent = data.name || data.login;
    bioEl.textContent = data.bio || 'Pengguna ini belum menyetel bio.';
    reposEl.textContent = data.public_repos;
    linkEl.href = data.html_url;

    // Tampilkan hasil
    profileResult.style.display = 'block';
  } catch (err) {
    errorEl.textContent = err.message;
    errorEl.style.display = 'block';
  } finally {
    loadingEl.style.display = 'none';
  }
});