import App from '@/App.vue';
import { createPinia } from 'pinia';
import { createOnyx } from 'sit-onyx';
import { createApp } from 'vue';
import VueScan, { type VueScanOptions } from 'z-vue-scan';

import 'sit-onyx/global.css';
import 'sit-onyx/style.css';

/**
 * Setup up vue app. This function should not be called twice. Its exported only for testing.
 */
export async function setupApp() {
  const onyx = createOnyx({});

  const app = createApp(App).use(createPinia()).use(onyx);

  app.use<VueScanOptions>(VueScan, {
    enable: false,
    displayDuration: 3000,
    fadeOutDuration: 2000,
  });

  app.mount('#app');
  return app;
}
setupApp();
