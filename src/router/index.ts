import { App as Application } from 'vue';
import { createRouter, createWebHistory, Router } from 'vue-router';

import baseRoutes from './base';
import authRoutes from './auth';

declare module 'vue-router' {
  interface RouteMeta {
    i18nAlias: string;
    platform?: string;
  }
}

const routes = [
  ...authRoutes,
  ...baseRoutes,
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/pages/not-found/NotFound.vue'),
    meta: {
      i18nAlias: 'not-found',
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default async function setupRouter(app: Application): Promise<Router> {
  app.use(router);

  await router.isReady();

  return router;
}
