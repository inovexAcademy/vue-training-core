import App from '@/App.vue';
import { i18n } from '@/i18n';
import { createPinia } from 'pinia';
import { createOnyx } from 'sit-onyx';
import { createApp } from 'vue';

import 'sit-onyx/global.css';
import 'sit-onyx/style.css';
import './styles/index.scss';

/**
 * Setup up vue app. This function should not be called twice. Its exported only for testing.
 */
export const setupApp = async () => {
  const onyx = createOnyx({});
  const app = createApp(App).use(createPinia()).use(i18n).use(onyx);

  app.mount('#app');
  return app;
};
setupApp();
