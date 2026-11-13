import { createRouter, createWebHistory } from 'vue-router'
import BerandaView from '../views/BerandaView.vue'
import KeranjangView from '../views/KeranjangView.vue'
import BukuCatatan from '../components/BukuCatatan.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
    },
    {
      path: '/buku-catatan',
      name: 'buku-catatan',
      component: BukuCatatan
    }
  ]
})

export default router