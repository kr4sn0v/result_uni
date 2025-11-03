<script setup>
import { reactive, computed, provide } from 'vue'
import BasketTable from './components/BasketTable.vue'

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

const descreaseItemQuantity = (item) => {
  if (item.quantity > 1) {
    item.quantity--
  }
}

const increaseItemQuantity = (item) => {
  item.quantity++
}

const removeItem = (index) => {
  basket.splice(index, 1)
}

const totalPrice = computed(() => {
  return basket.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)
})

const totalTax = computed(() => {
  return (totalPrice.value * 0.1).toFixed(2)
})

provide('totalPrice', totalPrice)
provide('totalTax', totalTax)
</script>

<template>
  <div class="container basket">
    <BasketTable
      :basket
      @descrease-item-quantity="descreaseItemQuantity"
      @increase-item-quantity="increaseItemQuantity"
      @remove-item="removeItem"
    />
  </div>
</template>

<style scoped src="./App.css"></style>
