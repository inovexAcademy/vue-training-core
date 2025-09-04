import { createWebHistory, createRouter } from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import CheckoutView from '@/views/CheckoutView.vue';
import ProductView from '@/views/ProductView.vue';
import NotFoundView from '@/views/NotFoundView.vue';

export const routes = [
  { path: '/', component: HomeView, name: 'Home' },
  { path: '/checkout', component: CheckoutView, name: 'Checkout' },
  { path: '/product/:productId', component: ProductView, name: 'Product' },
  { path: '/product-not-found', component: NotFoundView, name: 'NotFound' },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
