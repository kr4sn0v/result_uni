<template>
  <div class="login">
    <h1>Вход</h1>
    <button class="btn-login" @click="login">Войти как пользователь</button>
  </div>
</template>

<script setup>
import { login } from './index.js'
</script>

<style scoped>
.login {
  text-align: center;
  padding: 20px 0;
}

.btn-login {
  display: inline-block;
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 6px;
  cursor: pointer;
  text-decoration: none;
}

.btn-login:hover {
  background-color: #0056b3;
}
</style>
