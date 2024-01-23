import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "@/views/LoginView";
import AdminView from "@/views/AdminView.vue";
import Layout from "@/views/Layout.vue";
import RegisterView from "@/views/RegisterView.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/Login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'Rregister',
    component: RegisterView
  },
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children:[
      {
        path: '',
        name: 'home',
        component: HomeView
      },
      {
        path: 'admin',
        name: 'admin',
        component:AdminView
      }
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
