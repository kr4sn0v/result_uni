<template>
  <div class="products__container">
    <h2 class="products__header">Products</h2>
    <div class="products__grid">
      <div v-for="product in products" :key="product.id" class="products__card">
        <h3>{{ product.name }}</h3>
        <p>
          <strong>$ {{ product.price }}</strong>
        </p>
        <button @click="addToCart(product)">Add to cart</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCart } from '@/composables/useCart'

const { addItem: addToCart } = useCart()

const products = [
  { id: 1, name: 'Craft Beer', price: 10.99 },
  { id: 2, name: 'Aged Cheeze', price: 14.99 },
  { id: 3, name: 'Tulip Bouquet', price: 31.69 },
  { id: 4, name: 'Artisan Coffee', price: 8.49 },
  { id: 5, name: 'Organic Honey', price: 12.25 },
  { id: 6, name: 'Olive Oil', price: 18.75 },
  { id: 7, name: 'Dark Chocolate', price: 9.99 },
  { id: 8, name: 'Sea Salt', price: 5.5 },
  { id: 9, name: 'Maple Syrup', price: 15.3 },
  { id: 10, name: 'Truffle Pate', price: 22.4 },
]
</script>

<style scoped>
.products__container {
  display: block;
}

.products__header {
  display: flex;
  align-items: start;
  justify-content: start;
}

.products__grid {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}

.products__card {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
}
</style>
