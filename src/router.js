import { createWebHistory, createRouter } from 'vue-router'
import { isLoggedIn } from './auth'

const routes = [
  {
    path: '/',
    component: () => import('./DashboardView.vue'),
    alias: '/dashboard',
    meta: { requiresAuth: true },
  },
  {
    path: '/tasks',
    component: () => import('./tasks/TasksView.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/tasks/:id',
    component: () => import('./tasks/TaskDetailsView.vue'),
    props: true,
    meta: { requiresAuth: true },
  },
  {
    path: '/settings',
    component: () => import('./settings/SettingsView.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        redirect: '/settings/profile',
        meta: { requiresAuth: true },
      },
      {
        path: 'profile',
        component: () => import('./settings/ProfileView.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'security',
        component: () => import('./settings/SecurityView.vue'),
        meta: { requiresAuth: true },
      },
    ],
  },
  { path: '/:pathMatch(.*)*', component: () => import('./NotFoundView.vue') },
  { path: '/login', name: 'Login', component: () => import('./auth/LoginView.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'router-link--intermediate',
  linkExactActiveClass: 'router-link--active',
})

router.beforeEach(async (to, from, next) => {
  if (to.meta.requiresAuth && isLoggedIn.value === false) {
    next('/login')
  } else {
    next()
  }
})

export default router
