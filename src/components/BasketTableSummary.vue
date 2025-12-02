<script setup>
import { useBasketStore } from '@/stores/basket'

const basketStore = useBasketStore()
</script>

<template>
  <tr>
    <td colspan="5">
      <div class="basket-table__summary">
        <p class="basket-table__total">
          Total <b>$ {{ basketStore.totalPrice.toFixed(2) }}</b>
        </p>
        <p>Tax $ {{ basketStore.tax }}</p>
      </div>
    </td>
  </tr>
</template>

<style>
.basket-table__summary {
  text-align: right;
}

.basket-table__total {
  font-size: 1.4rem;
}
</style>
