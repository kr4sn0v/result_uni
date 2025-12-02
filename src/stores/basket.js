import { defineStore, acceptHMRUpdate } from 'pinia'
import { reactive, computed } from 'vue'

export const useBasketStore = defineStore('basket', () => {
  const basket = reactive([
    {
      id: 1,
      name: 'Blue Flower Print Crop Top',
      color: 'Yellow',
      size: 'M',
      price: 29.0,
      quantity: 1,
      imageUrl: './assets/crop-top.png',
    },
    {
      id: 2,
      name: 'Levender Hoodie',
      color: 'Levender',
      size: 'XXL',
      price: 119.0,
      quantity: 1,
      imageUrl: './assets/hoodie.png',
    },
    {
      id: 3,
      name: 'Black Sweatshirt',
      color: 'Black',
      size: 'XXL',
      price: 123.0,
      quantity: 1,
      imageUrl: './assets/sweatshirt.png',
    },
  ])

  const decreaseItemQuantity = (id) => {
    const item = basket.find((item) => item.id === id)
    if (item && item.quantity > 1) {
      item.quantity--
    }
  }

  const increaseItemQuantity = (id) => {
    const item = basket.find((item) => item.id === id)
    if (item) {
      item.quantity++
    }
  }

  const removeItem = (index) => {
    basket.splice(index, 1)
  }

  const totalPrice = computed(() => {
    return basket.reduce((acc, item) => acc + item.price * item.quantity, 0)
  })

  const tax = computed(() => {
    return (totalPrice.value * 0.1).toFixed(2)
  })

  return { basket, decreaseItemQuantity, increaseItemQuantity, removeItem, totalPrice, tax }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useBasketStore, import.meta.hot))
}
