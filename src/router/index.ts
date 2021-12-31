import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Top from "@/views/top/Index.vue";
import TsBase from "@/views/tsbase/Index.vue";
import FlexStudy from "@/views/flex_study/Index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Top",
    component: Top,
  },
  {
    path: "/ts_base",
    name: "TsBase",
    component: TsBase,
  },
  {
    path: "/flex",
    name: "Flex",
    component: FlexStudy,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
