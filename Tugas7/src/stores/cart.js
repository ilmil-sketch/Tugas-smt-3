import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const items = ref([])
  const notification = ref(null) // State untuk menyimpan pesan notifikasi aktif

  // Tambah produk ke keranjang + munculkan notifikasi
  const addItem = (product) => {
    const existingItem = items.value.find(item => item.id === product.id)
    if (existingItem) {
      existingItem.quantity += 1
    } else {
      items.value.push({ ...product, quantity: 1 })
    }

    // Tampilkan notifikasi
    showNotification(`"${product.name}" berhasil ditambahkan ke keranjang! 📚`)
  }

  // Fungsi helper untuk memunculkan dan otomatis menghilangkan notifikasi dalam 3 detik
  const showNotification = (message) => {
    notification.value = message
    setTimeout(() => {
      if (notification.value === message) {
        notification.value = null
      }
    }, 3000)
  }

  const increaseQuantity = (productId) => {
    const item = items.value.find(item => item.id === productId)
    if (item) item.quantity += 1
  }

  const decreaseQuantity = (productId) => {
    const item = items.value.find(item => item.id === productId)
    if (item && item.quantity > 1) {
      item.quantity -= 1
    } else if (item && item.quantity === 1) {
      removeItem(productId)
    }
  }

  const removeItem = (productId) => {
    items.value = items.value.filter(item => item.id !== productId)
  }

  const totalItems = computed(() => {
    return items.value.reduce((total, item) => total + item.quantity, 0)
  })

  const totalPrice = computed(() => {
    return items.value.reduce((total, item) => total + (item.price * item.quantity), 0)
  })

  return { 
    items, 
    notification, 
    addItem, 
    increaseQuantity, 
    decreaseQuantity, 
    removeItem, 
    totalItems, 
    totalPrice 
  }
})