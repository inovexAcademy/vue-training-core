import { createRouter, createWebHistory } from 'vue-router';
import AboutView from '../views/AboutView.vue';
import HomeView from '../views/HomeView.vue';
import MovieView from '../views/MovieView.vue';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: HomeView,
    name: 'Homepage',
  },
  {
    path: '/about',
    component: AboutView,
    name: 'About',
  },
  /* {
    path: '/movie/:movieId',
    component: MovieView,
    name: 'Movie',
  }, */
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
