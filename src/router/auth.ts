import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: () => import('@/layouts/SimpleLayout.vue'),
    children: [
      {
        path: '',
        name: 'Login',
        component: () => import('@/pages/login/LoginPage.vue'),
        meta: {
          i18nAlias: 'login',
        },
      },
    ],
  },
  {
    path: '/registration',
    component: () => import('@/layouts/SimpleLayout.vue'),
    children: [
      {
        path: '',
        name: 'Registration',
        component: () => import('@/pages/registration/RegistrationPage.vue'),
        meta: {
          i18nAlias: 'registration',
        },
      },
    ],
  },
];

export default routes;
