import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home',
      children: [
        {
          name: 'home',
          path: '/home',
          component: () => import('@/pages/home.vue'),
        },
      ],
    },
  ],
})

export default router
