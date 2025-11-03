<script setup>
import { inject } from 'vue'

const totalPrice = inject('totalPrice')
const totalTax = inject('totalTax')
</script>

<template>
  <td colspan="5">
    <div class="basket-table__summary">
      <p class="basket-table__total">
        Total <b>$ {{ totalPrice }}</b>
      </p>
      <p>Tax $ {{ totalTax }}</p>
    </div>
  </td>
</template>

<style scoped src="./BasketTableSummary.css"></style>
