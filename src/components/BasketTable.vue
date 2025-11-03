<script setup>
import BasketTableItem from './BasketTableItem.vue'
import BasketTableSummary from './BasketTableSummary.vue'

defineProps({
  basket: {
    type: Array,
    required: true,
  },
})

defineEmits(['descrease-item-quantity', 'increase-item-quantity', 'remove-item'])
</script>

<template>
  <table class="basket-table">
    <thead class="basket-table__header">
      <tr>
        <th>Product Details</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Subtotal</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody class="basket-table__body">
      <BasketTableItem
        v-for="(item, index) in basket"
        :key="item.id"
        v-bind="item"
        @descrease-item-quantity="$emit('descrease-item-quantity', item)"
        @increase-item-quantity="$emit('increase-item-quantity', item)"
        @remove-item="$emit('remove-item', index)"
      />
      <tr v-if="basket.length === 0">
        <td colspan="5">
          <p class="basket-table__empty">No items</p>
        </td>
      </tr>

      <BasketTableSummary v-if="basket.length > 0" />
    </tbody>
  </table>
</template>

<style src="./BasketTable.css"></style>
