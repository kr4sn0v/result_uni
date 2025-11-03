<script setup>
defineProps({
  imageUrl: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
})

defineEmits(['descrease-item-quantity', 'increase-item-quantity', 'remove-item'])
</script>

<template>
  <tr>
    <td>
      <div class="basket-item">
        <div class="basket-item__image">
          <img :src="imageUrl" alt="" />
        </div>
        <div class="basket-item__info">
          <h2 class="basket-item__info-h2">{{ name }}</h2>
          <p class="basket-item__info-p">Color: {{ color }}</p>
          <p class="basket-item__info-p">Size: {{ size }}</p>
        </div>
      </div>
    </td>
    <td>
      <p class="basket-item__price">$ {{ price }}</p>
    </td>
    <td>
      <div class="basket-item__quantity">
        <button class="quantity-button" @click="$emit('descrease-item-quantity')">–</button>
        <input type="number" :value="quantity" min="1" />
        <button class="quantity-button" @click="$emit('increase-item-quantity')">+</button>
      </div>
    </td>
    <td>
      <p class="basket-item__price">$ {{ price * quantity }}</p>
    </td>
    <td>
      <button class="btn btn-delete" aria-label="Удалить" @click="$emit('remove-item')">
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
</template>

<style scoped src="./BasketTableItem.css"></style>
