import { createRouter, createWebHistory } from 'vue-router'
import Portofolio from '../views/Portofolio.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Portofolio
    }
  ]
})

export default router
