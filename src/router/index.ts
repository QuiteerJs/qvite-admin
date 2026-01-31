import { createRouter, createWebHashHistory } from 'vue-router'
import { routes as autoRoutes } from 'vue-router/auto-routes'

export const routes = [...autoRoutes]
console.log('routes: ', routes)

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
