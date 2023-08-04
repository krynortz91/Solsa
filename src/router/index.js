import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ServiciosView from '../views/ServiciosView.vue'

const routes = [
  {
    path: "/",
    name: "HomeView",
    component:HomeView
  },
  {
    path: '/ServiciosView',
    name: 'ServiciosView',
    component: ServiciosView,
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
