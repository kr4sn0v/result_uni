<script setup>
defineProps({
  review: Object,
  rating: Number,
})
</script>

<template>
  <div class="review__rating">
    <span v-for="n in 5" :key="`star-${n}`" class="star">
      {{ n <= review.rating ? '★' : '☆' }}
    </span>
  </div>
</template>

<style scoped>
.review__rating {
  color: gold;
  font-size: 1.2rem;
}
</style>
