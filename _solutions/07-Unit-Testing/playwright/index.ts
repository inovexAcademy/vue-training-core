import { beforeMount } from '@playwright/experimental-ct-vue/hooks';
import { createPinia } from 'pinia';
import { createOnyx } from 'sit-onyx';
import { createMemoryHistory, createRouter } from 'vue-router';
import 'sit-onyx/global.css';
import 'sit-onyx/style.css';
import '@/styles/index.scss';

export type HooksConfig = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  route?: any;
};

beforeMount<HooksConfig>(async ({ app }) => {
  const pinia = createPinia();
  app.use(pinia);

  const router = createRouter({
    history: createMemoryHistory(),
    routes: [],
  });
  app.use(router);

  const onyx = createOnyx({ router });
  app.use(onyx);
});
