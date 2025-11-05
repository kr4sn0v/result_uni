<template>
  <div class="container todo-app">
    <h1 class="title">Todo List</h1>

    <TodoForm v-model="textValue" @add-todo="addTodo" />

    <TodoList :todos="todos" @remove-todo="removeTodo" />

    <TodoFooter
      v-if="todos.length"
      :remaining="remainingTodos"
      @clear-completed="clearCompleted"
      @clear-all="clearAll"
    />
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'
import TodoForm from './components/TodoForm.vue'

const todos = reactive([
  { id: 1, text: 'Изучить компоненты Vue.js', completed: true },
  { id: 2, text: 'Создать TodoList приложение', completed: false },
  { id: 3, text: 'Похвалить себя за отличную работу', completed: false },
])

const removeTodo = (index) => {
  todos.splice(index, 1)
}

const textValue = ref('')

const addTodo = () => {
  textValue.value !== '' || false
    ? todos.push({ id: Date.now(), text: textValue.value, completed: false })
    : alert('Введите название задачи')
}

const remainingTodos = computed(() => todos.filter((todo) => !todo.completed).length)

const clearCompleted = () => {
  for (let i = todos.length - 1; i >= 0; i--) {
    if (todos[i].completed) {
      todos.splice(i, 1)
    }
  }
}

const clearAll = () => {
  todos.splice(0, todos.length)
}
</script>

<style src="./App.css"></style>
