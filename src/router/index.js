import { createRouter, createWebHistory } from 'vue-router'
// import VueRouter from "vue-router";
import HomeView from '../views/HomeView.vue'
// import GaleriaView from '../views/GaleriaView.vue'
import ServiciosView from '../views/ServiciosView.vue'
// import NotFoundView from '../views/NotFoundView'
import MecanizadosView from '../views/MecanizadosView.vue'


// Vue.use(BootstrapVue);

const routes = [
  {
    path: "/",
    name: "HomeView",
    component:HomeView
  },
  // {
  //   path: '/GaleriaView',
  //   name: 'GaleriaView',
  //   component: GaleriaView,  
  // },
  {
    path: '/ServiciosView',
    name: 'ServiciosView',
    component: ServiciosView
  },
  {
    path: '/MecanizadosView',
    name: 'MecanizadosView',
    component: MecanizadosView,
  }
  // { 
  //   path: '/:pathMatch(.*)*',
  //   name: 'NotFoundView',
  //   component: NotFoundView 
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
