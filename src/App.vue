<template>
  <div class="container todo-app">
    <h1 class="title">Todo List</h1>
    <TodoForm @add-todo="addTodo" />

    <TodoList :todos="todos" @remove-todo="removeTodo" />

    <TodoFooter
      v-if="todos.length"
      :remaining="remainingTodos"
      @clear-completed="clearCompleted"
      @clear-all="clearAll"
    />
    <div v-show="isLoading">Загрузка...</div>
    <div v-if="error">Произошла ошибка: {{ error }}</div>
  </div>
</template>

<script setup>
import { reactive, computed, onMounted } from 'vue'
import TodoForm from './components/TodoForm.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'
import { useFetch } from './composables/useFetch'

const todos = reactive([])
const { isLoading, error, fetchData } = useFetch()

const fetchTodos = async () => {
  const data = await fetchData('http://localhost:3000/todos')
  todos.splice(0, todos.length, ...data)
}

const addTodo = (newTodo) => {
  const newTodoId = new Date()
  const newTodoAdd = {
    id: newTodoId.toString(),
    text: newTodo,
    completed: false,
  }

  fetchData('http://localhost:3000/todos', {
    method: 'POST',
    body: newTodoAdd,
    headers: { 'Content-Type': 'application/json' },
  }).then(() => {
    fetchTodos()
  })
}

const removeTodo = async (id) => {
  fetchData(`http://localhost:3000/todos/${id}`, {
    method: 'DELETE',
  }).then(() => {
    fetchTodos()
  })
}

const remainingTodos = computed(() => todos.filter((todo) => !todo.completed).length)

const clearCompleted = () => {
  for (let i = todos.length - 1; i >= 0; i--) {
    if (todos[i].completed) {
      removeTodo(todos[i].id)
    }
  }
}

const clearAll = async () => {
  for (let i = todos.length - 1; i >= 0; i--) {
    if (todos[i]) {
      removeTodo(todos[i].ifd)
    }
  }
}

onMounted(() => {
  fetchTodos()
})
</script>

<style src="./App.css"></style>
