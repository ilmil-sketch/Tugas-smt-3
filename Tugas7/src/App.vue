<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useCartStore } from './stores/cart'

const cartStore = useCartStore()
</script>

<template>
  <div id="app">
    <!-- Navbar Toko Buku -->
    <header class="navbar">
      <div class="navbar-brand">
        <h1>📚 Book Shop</h1>
      </div>
      <nav class="navbar-menu">
        <RouterLink to="/" class="nav-link">Beranda</RouterLink>
        <RouterLink to="/keranjang" class="nav-link">
          🛒 Keranjang ({{ cartStore.totalItems }})
        </RouterLink>
      </nav>
    </header>

    <!-- Notifikasi Melayang (Toast Notification) -->
    <transition name="fade">
      <div v-if="cartStore.notification" class="toast-notification">
        <span>{{ cartStore.notification }}</span>
      </div>
    </transition>

    <!-- Konten Utama -->
    <main class="main-content">
      <RouterView />
    </main>

    <!-- Footer -->
    <footer class="footer">
      <p>&copy; 2026 Toko Buku Online. Dibuat dengan Vue 3 & Vite.</p>
    </footer>
  </div>
</template>

<style>
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
  position: relative;
}

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

/* Styling Toast Notification Melayang di Pojok Kanan Bawah */
.toast-notification {
  position: fixed;
  bottom: 25px;
  right: 25px;
  background-color: #2b6cb0;
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  font-weight: 600;
  font-size: 0.9rem;
  z-index: 9999;
  display: flex;
  align-items: center;
  animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.main-content {
  flex: 1;
  padding: 20px;
}

.footer {
  text-align: center;
  padding: 20px;
  background-color: #ffffff;
  border-top: 1px solid #e2e8f0;
  color: #94a3b8;
  font-size: 0.85rem;
}
</style>