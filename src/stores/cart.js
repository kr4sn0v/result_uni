import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// id, name, price, quantity

export const useCartStore = defineStore('cart', () => {
  const items = ref([])

  const totalItems = computed(() => items.value.reduce((sum, i) => (sum += i.quantity), 0))

  const totalPrice = computed(() =>
    Number(items.value.reduce((sum, i) => (sum += i.price * i.quantity), 0)).toFixed(2),
  )

  const discountPrice = computed(() =>
    totalItems.value > 2 ? Number(totalPrice.value * 0.9).toFixed(2) : totalPrice.value,
  )

  const addItem = (product) => {
    const exiting = items.value.find((i) => i.id === product.id)
    if (exiting) {
      exiting.quantity++
    } else {
      items.value.push({ ...product, quantity: 1 })
    }
  }

  const removeItem = (id) => {
    items.value = items.value.filter((i) => i.id !== id)
  }

  const updateQuantity = (id, quantity) => {
    const item = items.value.find((i) => i.id === id)
    if (item) {
      if (quantity > 0) item.quantity = quantity
    }
  }

  const clearCart = () => {
    items.value = []
  }

  return {
    items,
    totalItems,
    totalPrice,
    discountPrice,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
  }
})
