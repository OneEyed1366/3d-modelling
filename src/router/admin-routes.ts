import { RouteRecordRaw } from 'vue-router';

const route = '/admin';

export const adminRoutes: Array<RouteRecordRaw> = [
  {
    path: `${route}`,
    name: 'Панель администратора',
    component: () => import('@/views/Admin/IndexView.vue'),
  },
];

export default adminRoutes;
