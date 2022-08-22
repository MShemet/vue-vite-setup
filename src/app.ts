import { createApp } from 'vue';
import { setupStore } from '@/stores';
import { useBaseStoreWithOut } from '@/stores/base';
import setupRouter from '@/router';
import setUiFramework from '@/plugins/quasar';
import { setupI18n, loadPageLocales } from '@/locales/i18n';
import { isLangCodeType, LOCALES, DEFAULT_LOCALE } from '@/locales/languages';

import '@/plugins/svg-sprite';

import MainApp from './App.vue';

(async () => {
  const app = createApp(MainApp);

  setupStore(app);

  const router = await setupRouter(app);

  const baseStore = useBaseStoreWithOut();

  const htmlLocale = document.documentElement.lang;

  const currentLocale: LOCALES = isLangCodeType(htmlLocale)
    ? htmlLocale
    : DEFAULT_LOCALE;

  baseStore.activeLangAlias = currentLocale;

  await setupI18n({
    appInstance: app,
    initLocale: currentLocale,
    pageName: router.currentRoute.value.meta.i18nAlias,
  });

  router.beforeEach(async (to, _from, next) => {
    await loadPageLocales({
      langCode: baseStore.activeLangAlias,
      pageName: to.meta.i18nAlias,
    });

    next();
  });

  setUiFramework(app);

  app.mount('#app');
})();
