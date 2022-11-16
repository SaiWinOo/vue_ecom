import {createRouter, createWebHistory} from 'vue-router'
import Home from "@/views/Home";
import Detail from "@/views/Detail";

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path:'/detail/:id',
    name: 'detail',
    component: Detail,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
