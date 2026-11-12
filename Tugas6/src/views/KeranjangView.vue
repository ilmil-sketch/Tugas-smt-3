<script setup>
import { useCartStore } from '../stores/cart'

// Menggunakan Pinia store keranjang
const cartStore = useCartStore()
</script>

<template>
  <div class="keranjang-container">
    <h2>Keranjang Belanja Anda</h2>

    <!-- Kondisi jika keranjang kosong -->
    <div v-if="cartStore.items.length === 0" class="empty-cart">
      <p>Keranjang belanja kamu masih kosong.</p>
      <router-link to="/" class="btn-shop">Mulai Belanja</router-link>
    </div>

    <!-- Kondisi jika ada item di keranjang -->
    <div v-else class="cart-content">
      <div class="cart-list">
        <div v-for="item in cartStore.items" :key="item.id" class="cart-item">
          <img :src="item.image" :alt="item.name" class="cart-item-image" />
          <div class="cart-item-details">
            <h4>{{ item.name }}</h4>
            <p class="item-price">Rp {{ item.price.toLocaleString('id-ID') }}</p>
          </div>
          <div class="cart-item-action">
            <span class="quantity">Jumlah: {{ item.quantity }}</span>
            <button @click="cartStore.removeFromCart(item.id)" class="btn-remove">
              Kurangi / Hapus
            </button>
          </div>
        </div>
      </div>

      <!-- Bagian Ringkasan Total Belanja -->
      <div class="cart-summary">
        <h3>Ringkasan Belanja</h3>
        <p>Total Item: <strong>{{ cartStore.totalItems }} pcs</strong></p>
        <p class="total-price">Total Harga: <strong>Rp {{ cartStore.totalPrice.toLocaleString('id-ID') }}</strong></p>
        <button class="btn-checkout" @click="alert('Checkout berhasil!')">
          Checkout Sekarang
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.keranjang-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}

.keranjang-container h2 {
  margin-bottom: 20px;
  color: #2c3e50;
}

.empty-cart {
  text-align: center;
  padding: 40px;
  background: #f9f9f9;
  border-radius: 8px;
}

.btn-shop {
  display: inline-block;
  margin-top: 15px;
  padding: 10px 20px;
  background-color: #42b883;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 500;
}

.cart-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.cart-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  gap: 15px;
}

.cart-item-image {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 4px;
}

.cart-item-details {
  flex: 1;
}

.cart-item-details h4 {
  margin: 0 0 5px 0;
  font-size: 1rem;
  color: #333;
}

.item-price {
  color: #666;
  margin: 0;
}

.cart-item-action {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 5px;
}

.quantity {
  font-size: 0.9rem;
  font-weight: 500;
}

.btn-remove {
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.85rem;
}

.btn-remove:hover {
  background-color: #c0392b;
}

.cart-summary {
  background: #fdfdfd;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.total-price {
  font-size: 1.1rem;
  color: #2c3e50;
}

.btn-checkout {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 10px;
}

.btn-checkout:hover {
  background-color: #2980b9;
}
</style>