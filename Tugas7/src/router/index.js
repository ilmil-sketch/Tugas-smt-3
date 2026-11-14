import { createRouter, createWebHashHistory } from 'vue-router' // <-- Ubah createWebHistory jadi createWebHashHistory
import BerandaView from '../views/BerandaView.vue'
import KeranjangView from '../views/KeranjangView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL), // <-- Ganti juga di sini
  routes: [
    {
      path: '/',
      name: 'beranda',
      component: BerandaView
    },
    {
      path: '/keranjang',
      name: 'keranjang',
      component: KeranjangView
    }
  ]
})

export default router