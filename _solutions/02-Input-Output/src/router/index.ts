import HomeView from '@/views/HomeView.vue';
import type { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { requiresAuth: true },
  },
  {
    path: '/error',
    name: 'Error',
    component: () => import('@/views/ErrorView.vue'),
    meta: { requiresAuth: false },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: to => ({
      path: '/error',
      query: { reason: 'not-found', path: to.path },
    }),
  },
];
