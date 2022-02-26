import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import adminRoutes from '@/router/admin-routes';
import usersRoutes from '@/router/users-routes';
import Home from '../views/Home.vue';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Главная',
    component: Home,
  },
  ...adminRoutes,
  ...usersRoutes,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
