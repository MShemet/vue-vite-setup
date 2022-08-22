import { App as Application } from 'vue';
import { createPinia, Pinia } from 'pinia';

export const store: Pinia = createPinia();

export function setupStore(app: Application) {
  app.use(store);
}
