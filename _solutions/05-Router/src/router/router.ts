import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import CheckoutView from '@/views/CheckoutView.vue';
import HomeView from '@/views/HomeView.vue';
import NotFound from '@/views/NotFound.vue';

export const routes: RouteRecordRaw[] = [
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  { path: '/', component: HomeView, name: 'Home' },
  { path: '/checkout', component: CheckoutView, name: 'Checkout' },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
