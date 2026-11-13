<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useCartStore } from './stores/cart'

const cartStore = useCartStore()
</script>

<template>
  <div id="app">
    <!-- Navbar / Menu Navigasi Atas -->
    <header class="navbar">
      <div class="navbar-brand">
        <h1>📚 Pustaka & Toko Buku</h1>
      </div>
      <nav class="navbar-menu">
        <RouterLink to="/" class="nav-link">Beranda</RouterLink>
        <RouterLink to="/buku-catatan" class="nav-link">Catatan Buku</RouterLink>
        
        <!-- Diperbaiki di sini agar tidak ada tag span di dalam RouterLink yang bentrok -->
        <RouterLink to="/keranjang" class="nav-link">
          🛒 Keranjang ({{ cartStore.totalItems }})
        </RouterLink>
      </nav>
    </header>

    <!-- Tempat Tampilnya Halaman -->
    <main class="main-content">
      <RouterView />
    </main>

    <!-- Footer Sederhana -->
    <footer class="footer">
      <p>&copy; 2026 Toko Buku & Catatan Bacaan. Dibuat dengan Vue 3 & Vite.</p>
    </footer>
  </div>
</template>

<style>
/* CSS Global untuk Aplikasi */
body {
  margin: 0;
  padding: 0;
  background-color: #f8fafc;
  font-family: Arial, sans-serif;
  color: #1e293b;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Navbar Styling */
.navbar {
  background-color: #ffffff;
  border-bottom: 1px solid #e2e8f0;
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
  position: sticky;
  top: 0;
  z-index: 1000;
  flex-wrap: wrap;
  gap: 15px;
}

.navbar-brand h1 {
  font-size: 1.25rem;
  margin: 0;
  color: #2c3e50;
  font-weight: 700;
}

.navbar-menu {
  display: flex;
  gap: 20px;
  align-items: center;
  flex-wrap: wrap;
}

.nav-link {
  text-decoration: none;
  color: #64748b;
  font-weight: 600;
  padding: 8px 12px;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.nav-link:hover {
  color: #3182ce;
  background-color: #f1f5f9;
}

.nav-link.router-link-active {
  color: #3182ce;
  background-color: #ebf8ff;
}

/* Main Content Area */
.main-content {
  flex: 1;
  padding: 20px;
}

/* Footer Styling */
.footer {
  text-align: center;
  padding: 20px;
  background-color: #ffffff;
  border-top: 1px solid #e2e8f0;
  color: #94a3b8;
  font-size: 0.85rem;
}
</style>