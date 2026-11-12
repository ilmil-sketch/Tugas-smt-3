import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  // State: daftar item di dalam keranjang
  const items = ref([])

  // Action: menambahkan produk ke keranjang
  const addToCart = (product) => {
    const existingItem = items.value.find(item => item.id === product.id)
    if (existingItem) {
      existingItem.quantity += 1
    } else {
      items.value.push({ ...product, quantity: 1 })
    }
  }

  // Action: mengurangi atau menghapus item dari keranjang
  const removeFromCart = (productId) => {
    const index = items.value.findIndex(item => item.id === productId)
    if (index !== -1) {
      if (items.value[index].quantity > 1) {
        items.value[index].quantity -= 1
      } else {
        items.value.splice(index, 1)
      }
    }
  }

  // Getter: total jumlah item di keranjang
  const totalItems = computed(() => {
    return items.value.reduce((total, item) => total + item.quantity, 0)
  })

  // Getter: total harga keseluruhan
  const totalPrice = computed(() => {
    return items.value.reduce((total, item) => total + (item.price * item.quantity), 0)
  })

  return {
    items,
    addToCart,
    removeFromCart,
    totalItems,
    totalPrice
  }
})