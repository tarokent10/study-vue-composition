import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Top from "@/views/top/Index.vue";
import TsBase from "@/views/top/Index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Top',
    component: Top
  },
  {
    path: '/ts_base',
    name: 'TsBase',
    component: TsBase
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
