import { RouteRecordRaw } from 'vue-router';

const route = '/users';

export const usersRoutes: Array<RouteRecordRaw> = [
  // {
  //   path: `${route}/register`,
  //   name: 'Users register page',
  //   component: () => import('@/views/Auth/RegisterView.vue'),
  // },
  {
    path: `${route}/login`,
    name: 'Users login page',
    component: () => import('@/views/Auth/LoginView.vue'),
  },
];

export default usersRoutes;
