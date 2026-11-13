<script setup>
import { ref, computed } from 'vue'

const judulBuku = ref('')
const kategoriBuku = ref('Fiksi')
const statusBaca = ref(false)
const daftarBuku = ref([])

const tambahBuku = () => {
  if (!judulBuku.value.trim()) return
  daftarBuku.value.push({
    id: Date.now(),
    judul: judulBuku.value,
    kategori: kategoriBuku.value,
    selesai: statusBaca.value
  })
  judulBuku.value = ''
  statusBaca.value = false
}

const hapusBuku = (id) => {
  daftarBuku.value = daftarBuku.value.filter(buku => buku.id !== id)
}

const toggleStatus = (buku) => {
  buku.selesai = !buku.selesai
}

const totalBuku = computed(() => daftarBuku.value.length)
const bukuSelesai = computed(() => daftarBuku.value.filter(b => b.selesai).length)
const bukuBelum = computed(() => totalBuku.value - bukuSelesai.value)
</script>

<template>
  <div class="buku-container">
    <h2>📖 Catatan Daftar Buku</h2>

    <!-- Form Input Buku yang Lebih Besar -->
    <form @submit.prevent="tambahBuku" class="form-buku">
      <input 
        type="text" 
        v-model="judulBuku" 
        placeholder="Masukkan judul buku baru..." 
        class="input-text"
      />
      
      <select v-model="kategoriBuku" class="select-kategori">
        <option value="Fiksi">Fiksi</option>
        <option value="Non-Fiksi">Non-Fiksi</option>
        <option value="Sains & Teknologi">Sains & Teknologi</option>
        <option value="Seni & Sastra">Seni & Sastra</option>
      </select>

      <label class="checkbox-label">
        <input type="checkbox" v-model="statusBaca" class="checkbox-input" />
        Sudah Selesai Dibaca
      </label>

      <button type="submit" class="btn-tambah">Tambah Buku</button>
    </form>

    <!-- Statistik Buku -->
    <div class="statistik">
      <p>Total Buku: <strong>{{ totalBuku }}</strong></p>
      <p>Selesai: <strong>{{ bukuSelesai }}</strong></p>
      <p>Belum: <strong>{{ bukuBelum }}</strong></p>
    </div>

    <!-- Daftar List Buku (Card Diperbesar) -->
    <div class="list-container">
      <div v-if="daftarBuku.length > 0">
        <div v-for="buku in daftarBuku" :key="buku.id" class="buku-card">
          <div class="buku-info">
            <h4>{{ buku.judul }}</h4>
            <span class="badge">{{ buku.kategori }}</span>
            <p :class="buku.selesai ? 'status-selesai' : 'status-belum'">
              {{ buku.selesai ? '✅ Selesai Dibaca' : '⏳ Belum Dibaca' }}
            </p>
          </div>
          <div class="buku-actions">
            <button @click="toggleStatus(buku)" :class="buku.selesai ? 'btn-unfinish' : 'btn-fin'">
              {{ buku.selesai ? 'Batalkan' : 'Selesai' }}
            </button>
            <button @click="hapusBuku(buku.id)" class="btn-hapus">Hapus</button>
          </div>
        </div>
      </div>
      <p v-else class="empty-text">Belum ada catatan buku yang ditambahkan.</p>
    </div>
  </div>
</template>

<style scoped>
.buku-container {
  max-width: 750px; /* Lebar container diperbesar */
  margin: 0 auto;
  font-family: Arial, sans-serif;
  color: #1e293b;
  padding: 10px;
}

h2 {
  text-align: center;
  color: #2c3e50;
  font-size: 1.8rem; /* Judul lebih besar */
  margin-bottom: 25px;
}

.form-buku {
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: white;
  padding: 25px; /* Padding card form diperbesar */
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 6px rgba(0,0,0,0.03);
  margin-bottom: 25px;
}

.input-text, .select-kategori {
  padding: 14px 16px; /* Input diperbesar */
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 1.05rem; /* Font input lebih besar */
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.05rem; /* Teks checkbox lebih besar */
  cursor: pointer;
  font-weight: 500;
}

.checkbox-input {
  width: 18px;
  height: 18px;
  cursor: pointer;
}

.btn-tambah {
  background-color: #3182ce;
  color: white;
  border: none;
  padding: 14px; /* Tombol tambah lebih tinggi dan besar */
  border-radius: 8px;
  font-size: 1.05rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-tambah:hover {
  background-color: #2b6cb0;
}

.statistik {
  display: flex;
  justify-content: space-around;
  background: #f1f5f9;
  padding: 18px; /* Box statistik diperbesar */
  border-radius: 10px;
  margin-bottom: 25px;
  font-size: 1.1rem; /* Teks statistik lebih besar */
}

.buku-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 20px; /* Card buku diperbesar */
  border-radius: 10px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.02);
  margin-bottom: 16px;
}

.buku-info h4 {
  margin: 0 0 8px 0;
  font-size: 1.25rem; /* Judul buku di card lebih besar */
  color: #1e293b;
}

.badge {
  background: #e2e8f0;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: bold;
  color: #475569;
}

.status-selesai {
  color: #16a34a;
  font-size: 0.95rem;
  margin: 8px 0 0 0;
  font-weight: 600;
}

.status-belum {
  color: #ca8a04;
  font-size: 0.95rem;
  margin: 8px 0 0 0;
  font-weight: 600;
}

.buku-actions {
  display: flex;
  gap: 10px;
}

.btn-fin, .btn-unfinish, .btn-hapus {
  font-size: 0.9rem; /* Tombol aksi di card diperbesar */
  font-weight: bold;
  padding: 10px 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s;
}

.btn-fin {
  background: #dcfce7;
  color: #15803d;
}

.btn-unfinish {
  background: #fef9c3;
  color: #a16207;
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
  padding: 30px;
  font-size: 1.1rem;
}
</style>