import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/', component: () => import('./DashboardView.vue'), alias: '/dashboard' },
  {
    path: '/tasks',
    component: () => import('./tasks/TasksView.vue'),
    meta: {
      transition: 'slide-fade',
    },
  },
  { path: '/tasks/:id', component: () => import('./tasks/TaskDetailsView.vue') },
  {
    path: '/settings',
    component: () => import('./settings/SettingsView.vue'),
    children: [
      {
        path: 'profile',
        component: () => import('./settings/ProfileView.vue'),
      },
      {
        path: 'security',
        component: () => import('./settings/SecurityView.vue'),
      },
    ],
  },
  { path: '/:pathMatch(.*)*', component: () => import('./NotFoundView.vue') },
]

export default createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'router-link--intermediate',
  linkExactActiveClass: 'router-link--active',
})
