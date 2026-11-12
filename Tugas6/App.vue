<script setup>
import { useCartStore } from './stores/cart'

// Mengambil data total item dari Pinia store untuk badge keranjang
const cartStore = useCartStore()
</script>

<template>
  <div id="app">
    <!-- Navbar / Menu Navigasi Atas -->
    <header class="navbar">
      <div class="navbar-brand">
        <h1>Tugas 6 - Vue Shop</h1>
      </div>
      <nav class="navbar-links">
        <router-link to="/" class="nav-link">Beranda</router-link>
        <router-link to="/keranjang" class="nav-link">
          Keranjang 
          <span v-if="cartStore.totalItems > 0" class="badge">
            {{ cartStore.totalItems }}
          </span>
        </router-link>
      </nav>
    </header>

    <!-- Tempat halaman views akan dirender secara dinamis oleh router -->
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<style>
/* CSS Global / Dasar */
body {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f4f6f8;
  color: #333;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Styling Navbar */
.navbar {
  background-color: #2c3e50;
  color: white;
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.navbar-brand h1 {
  margin: 0;
  font-size: 1.25rem;
}

.navbar-links {
  display: flex;
  gap: 20px;
  align-items: center;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding: 6px 12px;
  border-radius: 4px;
  transition: background-color 0.2s;
  position: relative;
}

.nav-link:hover,
.nav-link.router-link-active {
  background-color: #34495e;
}

/* Badge jumlah item di keranjang */
.badge {
  background-color: #e74c3c;
  color: white;
  font-size: 0.75rem;
  padding: 2px 6px;
  border-radius: 10px;
  margin-left: 5px;
  font-weight: bold;
}

/* Styling Konten Utama */
.main-content {
  flex: 1;
  padding: 20px 0;
}
</style>