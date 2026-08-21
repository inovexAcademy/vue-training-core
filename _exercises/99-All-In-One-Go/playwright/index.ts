import '@/styles/index.scss';
import { createTestingPinia } from '@pinia/testing';
import { beforeMount } from '@playwright/experimental-ct-vue/hooks';
import type { StateTree } from 'pinia';
import 'sit-onyx/global.css';
import 'sit-onyx/style.css';

export type HooksConfig = {
  store?: StateTree;
};

beforeMount<HooksConfig>(async ({ app, hooksConfig }) => {
  const pinia = createTestingPinia({
    initialState: {
      shoppingCart: hooksConfig?.store,
    },
    createSpy() {
      return () => {};
    },
  });

  app.use(pinia);
});
