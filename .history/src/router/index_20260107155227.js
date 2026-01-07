import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AiOperansional from '../views/AiOperansional.vue'
import AiSdm from '../views/AiSdm.vue'
import AiStrategi from '../views/AiStrategi.vue'
import AiPemasaran from '@/views/AiPemasaran.vue'
import AiKeuanganAkuntansi from '@/views/AiKeuanganAkuntansi.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/ai/operasional',
      name: 'ai-operansional',
      component: AiOperansional,
    },

  ],
})

export default router
