import Vue from 'vue'
import VueRouter from 'vue-router'
import Authorization from '../views/authorization.vue'
import Analytics from '../views/analytics.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'authorization',
    component: Authorization
  },
  {
    path: '/analytics',
    name: 'analytics',
    component: Analytics
  },
  {
    path: '/',
    redirect: '/authorization'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
