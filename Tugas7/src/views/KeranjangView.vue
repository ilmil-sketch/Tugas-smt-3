<script setup>
import { useCartStore } from '../stores/cart'

const cartStore = useCartStore()
</script>

<template>
  <div class="keranjang-container">
    <h2>Keranjang Belanja Buku</h2>

    <div v-if="cartStore.items.length > 0" class="cart-content">
      <div class="cart-list">
        <div v-for="item in cartStore.items" :key="item.id" class="cart-item">
          <img :src="item.image" :alt="item.name" class="cart-img" />
          
          <div class="cart-details">
            <h4>{{ item.name }}</h4>
            <p class="item-price">Rp {{ item.price.toLocaleString('id-ID') }}</p>
          </div>

          <!-- Kontrol Jumlah (Tambah & Kurang Angka) -->
          <div class="quantity-control">
            <button @click="cartStore.decreaseQuantity(item.id)" class="btn-qty">-</button>
            <span class="qty-number">{{ item.quantity }}</span>
            <button @click="cartStore.increaseQuantity(item.id)" class="btn-qty">+</button>
          </div>

          <div class="item-subtotal">
            <p>Rp {{ (item.price * item.quantity).toLocaleString('id-ID') }}</p>
          </div>

          <button @click="cartStore.removeItem(item.id)" class="btn-remove">Hapus</button>
        </div>
      </div>

      <!-- Ringkasan Belanja -->
      <div class="cart-summary">
        <h3>Ringkasan Pesanan</h3>
        <div class="summary-row">
          <span>Total Item:</span>
          <span><strong>{{ cartStore.totalItems }} buku</strong></span>
        </div>
        <div class="summary-row total">
          <span>Total Harga:</span>
          <span><strong>Rp {{ cartStore.totalPrice.toLocaleString('id-ID') }}</strong></span>
        </div>
        <button class="btn-checkout" @click="alert('Pesanan berhasil diproses!')">
          Checkout Sekarang
        </button>
      </div>
    </div>

    <div v-else class="empty-cart">
      <p>Keranjang belanjaan kamu masih kosong nih, yuk pilih buku dulu di Beranda! 📚</p>
      <router-link to="/" class="btn-explore">Lihat Katalog Buku</router-link>
    </div>
  </div>
</template>

<style scoped>
.keranjang-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.keranjang-container h2 {
  color: #2c3e50;
  text-align: center;
  margin-bottom: 25px;
}

.cart-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  padding: 15px;
  border-radius: 10px;
  border: 1px solid #e2e8f0;
  gap: 15px;
  flex-wrap: wrap;
}

.cart-img {
  width: 60px;
  height: 80px;
  object-fit: cover;
  border-radius: 6px;
}

.cart-details {
  flex: 1;
  min-width: 150px;
}

.cart-details h4 {
  margin: 0 0 5px 0;
  color: #2d3748;
  font-size: 1rem;
}

.item-price {
  color: #718096;
  font-size: 0.9rem;
  margin: 0;
}

/* Tombol Kontrol Angka */
.quantity-control {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #f1f5f9;
  padding: 4px 8px;
  border-radius: 6px;
}

.btn-qty {
  background: white;
  border: 1px solid #cbd5e1;
  width: 28px;
  height: 28px;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-qty:hover {
  background: #e2e8f0;
}

.qty-number {
  font-weight: bold;
  min-width: 20px;
  text-align: center;
}

.item-subtotal {
  font-weight: bold;
  color: #319795;
}

.btn-remove {
  background: #fee2e2;
  color: #b91c1c;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
}

.btn-remove:hover {
  background: #f87171;
  color: white;
}

/* Ringkasan */
.cart-summary {
  background: white;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.cart-summary h3 {
  margin: 0 0 10px 0;
  color: #2c3e50;
  font-size: 1.1rem;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  color: #4a5568;
}

.summary-row.total {
  font-size: 1.1rem;
  color: #2d3748;
  border-top: 1px solid #e2e8f0;
  padding-top: 10px;
}

.btn-checkout {
  background-color: #3182ce;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
  transition: background 0.2s;
}

.btn-checkout:hover {
  background-color: #2b6cb0;
}

.empty-cart {
  text-align: center;
  padding: 40px;
  background: white;
  border-radius: 10px;
  border: 1px solid #e2e8f0;
  color: #718096;
}

.btn-explore {
  display: inline-block;
  margin-top: 15px;
  background-color: #3182ce;
  color: white;
  padding: 10px 20px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: bold;
}
</style>