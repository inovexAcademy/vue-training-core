import { createRouter, createWebHistory } from 'vue-router';
import AboutView from '../views/AboutView.vue';
import HomeView from '../views/HomeView.vue';

export const routes = [
  {
    path: '/',
    component: HomeView,
  },
  {
    path: '/about',
    component: AboutView,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
