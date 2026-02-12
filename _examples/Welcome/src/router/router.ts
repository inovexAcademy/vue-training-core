import { createWebHistory, createRouter } from 'vue-router';

import HomeView from '@/views/HomeView.vue';

export const routes = [{ path: '/', component: HomeView, name: 'Home' }];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
