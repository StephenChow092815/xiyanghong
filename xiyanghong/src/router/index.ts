import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContractManagement from '../views/ContractManagement.vue'
import AddContract from '../views/AddContract.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/contractManagement',
      component: HomeView,
      children: [
        {
          path: '/contractManagement',
          name: 'ContractManagement',
          component: ContractManagement,
        },
        {
          path: '/addContract',
          name: 'AddContract',
          component: AddContract,
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
