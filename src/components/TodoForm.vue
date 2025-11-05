<template>
  <form class="form" @submit.prevent>
    <div class="form__group form__group--todo">
      <input class="form-control" type="text" placeholder="Новая задача" v-model.trim="value" />
      <button class="btn btn--add-todo" type="submit" @click="$emit('add-todo')">Добавить</button>
    </div>
  </form>
</template>

<script setup>
const value = defineModel()
</script>
