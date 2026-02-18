import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from 'vue-router';

import CheckoutView from '@/views/CheckoutView.vue';
import HomeView from '@/views/HomeView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import ProductView from '@/views/ProductView.vue';

export const routes: RouteRecordRaw[] = [
  { path: '/', component: HomeView, name: 'Home' },
  { path: '/checkout', component: CheckoutView, name: 'Checkout' },
  { path: '/product/:productId', component: ProductView, name: 'Product' },
  { path: '/product-not-found', component: NotFoundView, name: 'NotFound' },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
