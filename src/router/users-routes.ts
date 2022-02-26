import { RouteRecordRaw } from 'vue-router';

const route = '/users';

export const usersRoutes: Array<RouteRecordRaw> = [
  // {
  //   path: `${route}/register`,
  //   name: 'Страница регистрации',
  //   component: () => import('@/views/Auth/RegisterView.vue'),
  // },
  {
    path: `${route}/login`,
    name: 'Страница авторизации',
    component: () => import('@/views/Auth/LoginView.vue'),
  },
];

export default usersRoutes;
