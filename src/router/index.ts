import { createRouter, createWebHistory } from 'vue-router'

import NewAgentView from '@views/Agents/New.vue'
import RestrictedView from '@views/RestrictedView.vue'
import MainView from '@views/MainView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'entry',
      component: RestrictedView,
      meta: {
        fullscreen: true
      }
    },
    {
      path: '/main',
      name: 'main',
      component: MainView
    },
    {
      path: '/agents/new',
      name: 'newAgent',
      component: NewAgentView
    }
  ]
})

export default router
