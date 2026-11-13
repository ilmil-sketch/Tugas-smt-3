import { createRouter, createWebHistory } from 'vue-router'
import BerandaView from '../views/BerandaView.vue'
import KeranjangView from '../views/KeranjangView.vue'

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
    }
  ]
})

export default router