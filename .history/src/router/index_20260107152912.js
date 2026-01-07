import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AiOperansional from '../views/AiOperansional.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/ai-operansional',
      name: 'ai-operansional',
      component: AiOperansional,
    },

  ],
})

export default router
