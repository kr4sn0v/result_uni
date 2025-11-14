<template>
  <div class="cart__container">
    <h2 class="cart__header">Cart</h2>
    <div v-if="items.length === 0" class="cart__empty">
      <span>Cart is empty</span>
    </div>
    <div v-else class="cart__body">
      <ul class="cart__list">
        <li v-for="item in items" :key="item.id">
          <div>
            {{ item.name }} <br />
            $ {{ item.price }} x {{ item.quantity }}
          </div>
          <div>
            <input
              type="number"
              name=""
              id=""
              :value="item.quantity"
              @input="(event) => updateQuantity(item.id, +event.target.value)"
            />
            <button @click="removeItem(item.id)">Remove</button>
          </div>
        </li>
      </ul>
      <footer class="cart__footer">
        <div>Total: $ {{ totalPrice }}</div>
        <div>Count: {{ totalItems }}</div>
        <div>Discount: $ {{ discountPrice }}</div>
        <button @click="clearCart">Clear all</button>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { useCart } from '@/composables/useCart'

const { items, totalItems, totalPrice, discountPrice, removeItem, updateQuantity, clearCart } =
  useCart()
</script>

<style scoped>
.cart__container {
  display: block;
}

.cart__header {
  display: flex;
  align-items: start;
  justify-content: start;
}

.cart__empty {
  display: flex;
  align-items: center;
  justify-content: center;
}

.cart__body {
  display: block;
  align-items: center;
  justify-content: center;
}

.cart__list {
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  justify-content: space-around;
}

.cart__footer {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
