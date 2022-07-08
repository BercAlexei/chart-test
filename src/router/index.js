import Vue from 'vue'
import VueRouter from 'vue-router'
import Authorization from '../views/authorization.vue'
import Analytics from '../views/analytics.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/authorization',
    name: 'authorization',
    component: Authorization,
    beforeEnter: (to, from, next) => {
      if (
        localStorage.getItem("leadhit-site-id") == "5f8475902b0be670555f1bb3"
      ) {
        next({ path: '/analytics' })
      } else {
        next()
      }
    }
  },
  {
    path: '/analytics',
    name: 'analytics',
    component: Analytics,
    beforeEnter: (to, from, next) => {
      if (
        localStorage.getItem("leadhit-site-id") !== "5f8475902b0be670555f1bb3"
      ) {
        next({ path: '/authorization' })
      } else {
        next()
      }
    }
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
