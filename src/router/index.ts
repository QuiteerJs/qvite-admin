import { createRouter, createWebHashHistory } from 'vue-router'
import { BasicLayout, BlankLayout } from '../layouts'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: BasicLayout,
      children: [
        {
          name: 'home',
          path: '/home',
          component: () => import('@/pages/home.vue'),
        },
      ],
    },
    {
      path: '/child-app',
      name: 'child-app',
      component: () => import('@/pages/child-app.vue'),
    },
  ],
})

export default router
