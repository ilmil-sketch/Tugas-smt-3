<script setup>
import { ref, computed } from 'vue'

// State untuk form input
const judul = ref('')
const kategori = ref('Fiksi')
const selesaiDibaca = ref(false)

// Daftar kategori buku pilihan
const daftarKategori = ['Fiksi', 'Non-Fiksi', 'Teknologi', 'Seni & Desain', 'Sejarah']

// State untuk menyimpan daftar buku
const daftarBuku = ref([
  { id: 1, judul: 'Pemrograman Web Vue.js', kategori: 'Teknologi', selesai: true },
  { id: 2, judul: 'Patah Hati Tan Malaka', kategori: 'Fiksi', selesai: false }
])

// Fungsi untuk menambah buku baru
const tambahBuku = () => {
  if (!judul.value.trim()) return

  daftarBuku.value.push({
    id: Date.now(),
    judul: judul.value,
    kategori: kategori.value,
    selesai: selesaiDibaca.value
  })

  // Reset form
  judul.value = ''
  kategori.value = 'Fiksi'
  selesaiDibaca.value = false
}

// Fungsi untuk menghapus buku berdasarkan ID
const hapusBuku = (id) => {
  daftarBuku.value = daftarBuku.value.filter(buku => buku.id !== id)
}

// Fungsi untuk mengubah status baca secara langsung dari list
const toggleStatus = (buku) => {
  buku.selesai = !buku.selesai
}

// Computed property untuk menghitung jumlah buku yang sudah selesai dibaca
const totalSelesai = computed(() => {
  return daftarBuku.value.filter(buku => buku.selesai).length
})
</script>

<template>
  <div class="buku-container">
    <h2>Catatan Daftar Buku</h2>

    <!-- Form Input Buku -->
    <form @submit.prevent="tambahBuku" class="buku-form">
      <div class="form-group">
        <label>Judul Buku:</label>
        <input 
          type="text" 
          v-model="judul" 
          placeholder="Masukkan judul buku..." 
          required 
        />
      </div>

      <div class="form-group">
        <label>Kategori:</label>
        <select v-model="kategori">
          <option v-for="kat in daftarKategori" :key="kat" :value="kat">
            {{ kat }}
          </option>
        </select>
      </div>

      <div class="form-group checkbox-group">
        <label>
          <input type="checkbox" v-model="selesaiDibaca" />
          Selesai Dibaca
        </label>
      </div>

      <button type="submit" class="btn-tambah">Tambah Buku</button>
    </form>

    <!-- Informasi / Statistik -->
    <div class="info-box">
      <p>Total Buku: <strong>{{ daftarBuku.length }}</strong></p>
      <p>Selesai Dibaca: <strong>{{ totalSelesai }}</strong></p>
    </div>

    <!-- Daftar Buku (v-for) -->
    <div class="list-container">
      <h3>Daftar Buku Tersimpan</h3>
      <ul v-if="daftarBuku.length > 0">
        <li v-for="buku in daftarBuku" :key="buku.id" :class="{ 'completed': buku.selesai }">
          <div class="buku-info">
            <span class="buku-judul">{{ buku.judul }}</span>
            <span class="buku-kategori">[{{ buku.kategori }}]</span>
          </div>
          
          <div class="buku-actions">
            <!-- Tombol ubah status baca langsung -->
            <button @click="toggleStatus(buku)" class="btn-status" :class="buku.selesai ? 'btn-unfinish' : 'btn-fin'">
              {{ buku.selesai ? 'Batalkan' : 'Selesaikannya' }}
            </button>
            
            <!-- Tombol hapus buku -->
            <button @click="hapusBuku(buku.id)" class="btn-hapus">Hapus</button>
          </div>
        </li>
      </ul>
      <p v-else class="empty-text">Belum ada buku yang dicatat.</p>
    </div>
  </div>
</template>

<style scoped>
.buku-container {
  max-width: 700px;
  width: 100%;
  margin: 30px auto;
  padding: 25px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  font-family: Arial, sans-serif;
  box-sizing: border-box;
}

h2, h3 {
  color: #2c3e50;
  text-align: center;
  margin-bottom: 20px;
}

.buku-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  background: #f8fafc;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.form-group label {
  font-weight: bold;
  font-size: 0.9rem;
  color: #475569;
}

input[type="text"], select {
  width: 100%;
  padding: 10px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  font-size: 0.95rem;
  box-sizing: border-box;
}

.checkbox-group {
  flex-direction: row;
  align-items: center;
}

.checkbox-group label {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.btn-tambah {
  background-color: #3182ce;
  color: white;
  border: none;
  padding: 11px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
  width: 100%;
}

.btn-tambah:hover {
  background-color: #2b6cb0;
}

.info-box {
  display: flex;
  justify-content: space-around;
  background: #e0f2fe;
  padding: 12px;
  border-radius: 6px;
  margin: 20px 0;
  color: #0369a1;
  font-size: 0.95rem;
  flex-wrap: wrap;
  gap: 10px;
}

.list-container ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.list-container li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 15px;
  background: #f1f5f9;
  border-radius: 8px;
  border-left: 5px solid #cbd5e1;
  flex-wrap: wrap;
  gap: 10px;
}

.list-container li.completed {
  border-left-color: #22c55e;
  background: #f0fdf4;
}

.buku-info {
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
}

.buku-judul {
  font-weight: 600;
  color: #1e293b;
}

.buku-kategori {
  font-size: 0.75rem;
  color: #64748b;
  background: #e2e8f0;
  padding: 2px 6px;
  border-radius: 4px;
}

.buku-actions {
  display: flex;
  gap: 8px;
}

.btn-status, .btn-hapus {
  font-size: 0.75rem;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
}

.btn-fin {
  background: #dcfce7;
  color: #15803d;
}

.btn-unfinish {
  background: #dcfce7;
  color: #85283c;
}

.btn-hapus {
  background: #fee2e2;
  color: #b91c1c;
}

.btn-hapus:hover {
  background: #f87171;
  color: white;
}

.empty-text {
  text-align: center;
  color: #94a3b8;
  font-style: italic;
}
</style>