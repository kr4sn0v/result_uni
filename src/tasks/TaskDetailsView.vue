<template>
  <div>
    <h1>Задача {{ id }}</h1>
    <p>Детали задачи #{{ id }}</p>
  </div>
</template>

<script setup>
defineProps({
  id: {
    type: Number,
    required: true,
  },
})
</script>
