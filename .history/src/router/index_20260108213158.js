import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AiOperansional from '../views/AiOperansional.vue'
import AiSdm from '../views/AiSdm.vue'
import AiStrategi from '../views/AiStrategi.vue'
import AiPemasaran from '@/views/AiPemasaran.vue'
import TestAurora from '@/views/TestAurora.vue'
import AiKeuanganAkuntansi from '@/views/AiKeuanganAkuntansi.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/test',
      name: 'test',
      component: TestAurora,
    },
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
    {
      path: '/ai/sdm',
      name: 'ai-sdm',
      component: AiSdm,
    },
    {
      path: '/ai/strategi',
      name: 'ai-strategi',
      component: AiStrategi,
    },
    {
      path: '/ai/pemasaran',
      name: 'ai-pemasaran',
      component: AiPemasaran,
    },
    {
      path: '/ai/keuangan',
      name: 'ai-keuangan',
      component: AiKeuanganAkuntansi,
    },

  ],
})

export default router
