import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Top from '@/views/top/Index.vue';
import TsBase from '@/views/tsbase/Index.vue';
import FlexStudy from '@/views/flex_study/Index.vue';
import BlockInline from '@/views/block_inline/Index.vue';
import FlexLayout from '@/views/flex_layout_study/Index.vue';

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
  },
  {
    path: '/block_inline',
    name: 'BlockInline',
    component: BlockInline
  },
  {
    path: '/flex',
    name: 'Flex',
    component: FlexStudy
  },
  { path: '/flex_layout', name: 'FlexLayout', component: FlexLayout }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
