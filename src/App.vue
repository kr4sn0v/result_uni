<script setup>
import { computed, reactive, onMounted } from 'vue'

let basket = reactive([
  {
    id: 1,
    name: 'Blue Flower Print Crop Top',
    color: 'Yellow',
    size: 'M',
    price: 29.0,
    quantity: 1,
    imageUrl: '../public/crop-top.png',
  },
  {
    id: 2,
    name: 'Levender Hoodie',
    color: 'Levender',
    size: 'XXL',
    price: 119.0,
    quantity: 1,
    imageUrl: '../public/hoodie.png',
  },
  {
    id: 3,
    name: 'Black Sweatshirt',
    color: 'Black',
    size: 'XXL',
    price: 123.0,
    quantity: 1,
    imageUrl: '../public/sweatshirt.png',
  },
])

const increaseItemQuantity = (item, basket) => {
  item.quantity++
  saveBasket(basket)
}

const decreaseItemQuantity = (item, basket) => {
  item.quantity > 1 ? item.quantity-- : item.quantity
  saveBasket(basket)
}

const removeItem = (index, basket) => {
  basket.splice(index, 1)
  saveBasket(basket)
}

const totalPrice = computed(() => {
  let total = 0
  basket.forEach((item) => {
    total += item.price * item.quantity
  })
  return total
})

const totalTax = computed(() => {
  return (totalPrice.value / 10).toFixed(2)
})

const saveBasket = (basket) => {
  return localStorage.setItem('basket', JSON.stringify(basket))
}

const loadBasket = () => {
  const savedBasketString = localStorage.getItem('basket')
  return savedBasketString ? JSON.parse(savedBasketString) : []
}

onMounted(() => {
  const loaded = loadBasket()
  if (loaded && loaded.length) {
    basket.splice(0, basket.length)
    basket.push(...loaded)
  }
})
</script>

<template>
  <div class="container basket">
    <table class="basket-table">
      <!-- Header -->
      <thead class="basket-table__header">
        <tr>
          <th>Product Details</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Subtotal</th>
          <th>Action</th>
        </tr>
      </thead>

      <!-- Items -->
      <tbody class="basket-table__body">
        <tr v-for="(item, index) in basket" :key="item.id">
          <td>
            <div class="basket-item">
              <div class="basket-item__image">
                <img :src="item.imageUrl" alt="Items image" />
              </div>
              <div class="basket-item__info">
                <h2 class="basket-item__info-h2">{{ item.name }}</h2>
                <p class="basket-item__info-p">Color: {{ item.color }}</p>
                <p class="basket-item__info-p">Size: {{ item.size }}</p>
              </div>
            </div>
          </td>
          <td>
            <p class="basket-item__price">${{ item.price }}</p>
          </td>
          <td>
            <div class="basket-item__quantity">
              <button class="quantity-button" @click="decreaseItemQuantity(item, basket)">–</button>
              <input type="number" :value="item.quantity" min="1" />
              <button class="quantity-button" @click="increaseItemQuantity(item, basket)">+</button>
            </div>
          </td>
          <td>
            <p class="basket-item__price">${{ item.price * item.quantity }}</p>
          </td>
          <td>
            <button class="btn btn-delete" @click="removeItem(index, basket)" aria-label="Удалить">
              <svg
                class="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                />
              </svg>
            </button>
          </td>
        </tr>

        <tr v-if="basket.length === 0">
          <td colspan="5">
            <p class="basket-table__empty">No items</p>
          </td>
        </tr>
        <!-- Total -->
        <tr>
          <td colspan="5" v-if="basket.length > 0">
            <div class="basket-table__summary">
              <p class="basket-table__total">
                Total <b>${{ totalPrice }}</b>
              </p>
              <p>Tax ${{ totalTax }}</p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped src="./App.css"></style>
