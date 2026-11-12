<script setup>
import { ref } from 'vue'
import ProductCard from '../components/ProductCard.vue'
import { useCartStore } from '../stores/cart'

// Menggunakan Pinia store keranjang
const cartStore = useCartStore()

// Data dummy produk (bisa disesuaikan dengan kebutuhan tugas)
const products = ref([
  {
    id: 1,
    name: 'Vue.js Hoodie Exclusive',
    price: 150000,
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 2,
    name: 'JavaScript Programming T-Shirt',
    price: 95000,
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 3,
    name: 'Mechanical Keyboard RGB',
    price: 350000,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 4,
    name: 'Developer Coffee Mug',
    price: 65000,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=500&q=80'
  }
])

// Fungsi ketika tombol "Tambah ke Keranjang" diklik pada kartu produk
const handleAddToCart = (product) => {
  cartStore.addToCart(product)
  alert(`Berhasil menambahkan ${product.name} ke keranjang!`)
}
</script>

<template>
  <div class="beranda-container">
    <h2>Daftar Produk</h2>
    <div class="product-grid">
      <ProductCard 
        v-for="product in products" 
        :key="product.id" 
        :product="product" 
        @add-to-cart="handleAddToCart"
      />
    </div>
  </div>
</template>

<style scoped>
.beranda-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.beranda-container h2 {
  margin-bottom: 20px;
  color: #2c3e50;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
}
</style>