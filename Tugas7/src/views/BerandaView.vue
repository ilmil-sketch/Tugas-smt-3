<script setup>
import { ref } from 'vue'
import { useCartStore } from '../stores/cart'

const cartStore = useCartStore()

// Daftar lengkap 14 produk buku/novel
const products = ref([
  {
    id: 1,
    name: 'Algantara',
    price: 99000,
    image: 'Algantara.jpg',
    description: 'Novel fiksi remaja populer tentang lika-liku persahabatan dan cinta.'
  },
  {
    id: 2,
    name: 'Alvaska',
    price: 99000,
    image: 'Alvaska 1.jpg',
    description: 'Kisah awal perjalanan Alvaska yang penuh intrik dan perjuangan anak muda.'
  },
  {
    id: 3,
    name: 'Alvaska 2',
    price: 99000,
    image: 'Alvaska 2.jpg',
    description: 'Kelanjutan kisah emosional dan babak baru kehidupan Alvaska.'
  },
  {
    id: 4,
    name: 'Cantik Itu Luka',
    price: 115000,
    image: 'Cantik Itu Luka.jpg',
    description: 'Karya sastra epik perpaduan sejarah, realisme magis, dan tragedi.'
  },
  {
    id: 5,
    name: 'Dikta & Hukum',
    price: 95000,
    image: 'Dikta & Hukum.jpg',
    description: 'Novel best-seller tentang dinamika hukum, perjodohan, dan ketulusan.'
  },
  {
    id: 6,
    name: 'Dunia Anna',
    price: 65000,
    image: 'Dunia Anna.jpg',
    description: 'Petualangan filosofis dan penjelajahan makna hidup yang mendalam.'
  },
  {
    id: 7,
    name: 'Eccedentesias 7',
    price: 99000,
    image: 'Eccedentesias7.jpg',
    description: 'Kisah tentang menyembunyikan luka di balik senyuman.'
  },
  {
    id: 8,
    name: 'Galaksi',
    price: 99000,
    image: 'Galaksi.jpg',
    description: 'Novel fiksi remaja ikonik tentang geng motor, loyalitas, dan cinta.'
  },
  {
    id: 9,
    name: 'Laut Bercerita',
    price: 100000,
    image: 'Laut Bercerita.jpg',
    description: 'Karya masterpiece Leila S. Chudori tentang sejarah dan pencarian keadilan.'
  },
  {
    id: 10,
    name: 'Patah Hati Tan Malaka',
    price: 99000,
    image: 'Patah Hati Tan Malaka.jpg',
    description: 'Esai reflektif dan sastra perenungan jiwa yang sunyi.'
  },
  {
    id: 11,
    name: 'Sejarah Peradaban Dunia Kuno',
    price: 75000,
    image: 'Sejarah Peradaban Dunia Kuno.jpg',
    description: 'Buku referensi lengkap menelusuri jejak awal peradaban umat manusia.'
  },
  {
    id: 12,
    name: 'Seniman (Puisi Seni Patah Hati)',
    price: 89500,
    image: 'Seniman (Puisi Seni Patah Hati).jpg',
    description: 'Kumpulan diksi puitis yang merangkum rasa kehilangan dan keindahan.'
  },
  {
    id: 13,
    name: 'Seporsi Mie Ayam Sebelum Mati',
    price: 75000,
    image: 'Seporsi Mie Ayam Sebelum Mati.jpg',
    description: 'Novel fiksi kontemporer dengan sudut pandang unik dan menyentuh.'
  },
  {
    id: 14,
    name: 'Sisi Tergelap Surga',
    price: 95000,
    image: 'Sisi Tergelap Surga.jpg',
    description: 'Kisah misteri dan pencarian makna hidup di balik tirai kesempurnaan.'
  }
])
</script>

<template>
  <div class="beranda-container">
    <h2>Katalog Toko Buku & Novel</h2>
    <div class="product-grid">
      <div v-for="product in products" :key="product.id" class="product-card">
        <img :src="product.image" :alt="product.name" class="product-image" />
        <div class="card-content">
          <h3>{{ product.name }}</h3>
          <p class="price">Rp {{ product.price.toLocaleString('id-ID') }}</p>
          <p class="desc">{{ product.description }}</p>
          <button @click="cartStore.addItem(product)" class="btn-buy">
            Tambah ke Keranjang
          </button>
        </div>
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
  font-weight: 700;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.product-card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 4px 6px rgba(0,0,0,0.04);
  transition: transform 0.2s, box-shadow 0.2s;
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 15px rgba(0,0,0,0.08);
}

.product-image {
  width: 100%;
  height: 220px;
  object-fit: cover;
  background-color: #f1f5f9;
}

.card-content {
  padding: 15px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.product-card h3 {
  font-size: 1.05rem;
  margin: 0 0 8px 0;
  color: #2d3748;
  height: 2.4em;
  line-height: 1.2;
}

.price {
  font-weight: 700;
  color: #319795;
  font-size: 1.1rem;
  margin: 0 0 8px 0;
}

.desc {
  font-size: 0.85rem;
  color: #718096;
  margin: 0 0 15px 0;
  flex-grow: 1;
  line-height: 1.4;
}

.btn-buy {
  background-color: #3182ce;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  width: 100%;
  transition: background-color 0.2s;
}

.btn-buy:hover {
  background-color: #2b6cb0;
}
</style>