<template>
  <div>
    <h1>Настройки</h1>
    <div class="settings-tabs">
      <router-link to="/settings/profile" class="settings-tab">Профиль</router-link>
      <router-link to="/settings/security" class="settings-tab">Безопасность</router-link>
    </div>
    <div class="settings-panel">
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <Component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<style scoped>
.settings-tabs {
  display: flex;
  border-bottom: 1px solid #929292;
  margin-bottom: 20px;
}

.settings-tab {
  background-color: #f0f0f0;
  color: #333;
  padding: 8px 12px;
  border-radius: 4px 4px 0 0;
  text-decoration: none;
  margin-right: 5px;
  transition:
    background-color 0.3s,
    color 0.3s;
}

.settings-tab.router-link--active {
  background-color: #929292;
  color: white;
}

.settings-tab:hover {
  text-decoration: none;
  background-color: #929292;
  color: white;
}

.settings-panel {
  margin: 30px 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
