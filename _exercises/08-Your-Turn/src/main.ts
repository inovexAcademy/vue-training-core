import App from '@/App.vue';
import { createPinia } from 'pinia';
import { createOnyx } from 'sit-onyx';
import { createApp } from 'vue';
import { router } from './router/router';

import 'sit-onyx/global.css';
import 'sit-onyx/style.css';

/**
 * Setup up vue app. This function should not be called twice. Its exported only for testing.
 */
export async function setupApp() {
  const onyx = createOnyx({ router });
  const app = createApp(App).use(createPinia()).use(onyx).use(router);

  app.mount('#app');
  return app;
}
setupApp();
