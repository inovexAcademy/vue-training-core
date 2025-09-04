import { createWebHistory, createRouter } from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import CheckoutView from '@/views/CheckoutView.vue';
import ProductView from '@/views/ProductView.vue';
import NotFoundView from '@/views/NotFoundView.vue';

export const routes = [
  { path: '/', component: HomeView },
  { path: '/checkout', component: CheckoutView },
  { path: '/product/:productId', component: ProductView },
  { path: '/product-not-found', component: NotFoundView },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
