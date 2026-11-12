<script setup>
import { ref } from 'vue'
import { useCartStore } from '../stores/cart'

const cartStore = useCartStore()

// Daftar 10 produk dengan link gambar alternatif yang lebih stabil
const products = ref([
  {
    id: 1,
    name: 'Kiky Sketchbook A5 Spiral',
    price: 35000,
    image: 'https://picsum.photos/seed/sketchbook1/500/350',
    description: 'Buku sketsa berkualitas tinggi dengan jilid spiral ukuran A5.'
  },
  {
    id: 2,
    name: 'Sketchbook Cover Hitam Eksklusif',
    price: 45000,
    image: 'https://picsum.photos/seed/sketchbook2/500/350',
    description: 'Sketchbook cover hitam elegan, cocok untuk arsir pensil dan tinta.'
  },
  {
    id: 3,
    name: 'Professional Sketching Pencil Set',
    price: 85000,
    image: 'https://picsum.photos/seed/pencils1/500/350',
    description: 'Set pensil sketsa lengkap dengan paper stump, penghapus, dan rautan.'
  },
  {
    id: 4,
    name: 'Faber-Castell Graphite Pencils Set',
    price: 60000,
    image: 'https://picsum.photos/seed/pencils2/500/350',
    description: 'Pensil grafit klasik dengan berbagai tingkat kepekatan dari HB hingga 8B.'
  },
  {
    id: 5,
    name: 'Blending Stump & Tortillon Set',
    price: 25000,
    image: 'https://picsum.photos/seed/blending/500/350',
    description: 'Alat bantu kertas pengalus arsiran pensil agar gradasi lebih halus.'
  },
  {
    id: 6,
    name: 'Professional Charcoal Pencil Set',
    price: 50000,
    image: 'https://picsum.photos/seed/charcoal/500/350',
    description: 'Pensil arang hitam pekat untuk menghasilkan kontras gambar dramatis.'
  },
  {
    id: 7,
    name: 'Kneaded Eraser (Penghapus Liat)',
    price: 15000,
    image: 'https://picsum.photos/seed/eraser/500/350',
    description: 'Penghapus elastis yang bisa dibentuk untuk mengangkat arsiran tipis.'
  },
  {
    id: 8,
    name: 'Watercolor Brush Pen Set',
    price: 95000,
    image: 'https://picsum.photos/seed/brushpen/500/350',
    description: 'Pena kuas cat air praktis dengan wadah air di dalam bodinya.'
  },
  {
    id: 9,
    name: 'Wooden Artist Manikin (Boneka Kayu)',
    price: 75000,
    image: 'https://picsum.photos/seed/manikin/500/350',
    description: 'Model anatomi kayu artikulasi untuk referensi pose menggambar tubuh.'
  },
  {
    id: 10,
    name: 'Canvas Board 20x20 cm',
    price: 20000,
    image: 'https://picsum.photos/seed/canvas/500/350',
    description: 'Kanvas siap pakai beralaskan papan untuk lukisan akrilik atau minyak.'
  }
])
</script>

<template>
  <div class="beranda-container">
    <h2>Katalog Alat Gambar & Lukis</h2>
    <div class="product-grid">
      <div v-for="product in products" :key="product.id" class="product-card">
        <img :src="product.image" :alt="product.name" class="product-image" />
        <h3>{{ product.name }}</h3>
        <p class="price">Rp {{ product.price.toLocaleString('id-ID') }}</p>
        <p class="desc">{{ product.description }}</p>
        <button @click="cartStore.addItem(product)" class="btn-buy">
          Tambah ke Keranjang
        </button>
      </div>
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
  text-align: center;
  color: #2c3e50;
  margin-bottom: 30px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.product-card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.product-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 12px;
  background-color: #f1f5f9;
}

.product-card h3 {
  font-size: 1.1rem;
  margin: 0 0 8px 0;
  color: #2c3e50;
}

.price {
  font-weight: bold;
  color: #27ae60;
  margin: 0 0 8px 0;
}

.desc {
  font-size: 0.9rem;
  color: #666;
  margin: 0 0 15px 0;
  flex-grow: 1;
}

.btn-buy {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s;
}

.btn-buy:hover {
  background-color: #2980b9;
}
</style>