<script setup>
// Menerima data produk dari parent component (misal dari BerandaView)
defineProps({
  product: {
    type: Object,
    required: true
  }
})

// Mendefinisikan event untuk tombol beli/tambah ke keranjang
defineEmits(['add-to-cart'])
</script>

<template>
  <div class="product-card">
    <img :src="product.image" :alt="product.name" class="product-image" />
    <div class="product-info">
      <h3>{{ product.name }}</h3>
      <p class="price">Rp {{ product.price.toLocaleString('id-ID') }}</p>
      <button @click="$emit('add-to-cart', product)" class="btn-add">
        Tambah ke Keranjang
      </button>
    </div>
  </div>
</template>

<style scoped>
.product-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s;
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.product-image {
  width: 100%;
  height: 160px;
  object-fit: cover;
}

.product-info {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.product-info h3 {
  font-size: 1.1rem;
  margin: 0;
  color: #333;
}

.price {
  color: #2c3e50;
  font-weight: bold;
}

.btn-add {
  background-color: #42b883;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s;
}

.btn-add:hover {
  background-color: #35495e;
}
</style>