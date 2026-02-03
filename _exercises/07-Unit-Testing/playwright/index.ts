import '@/styles/index.scss';
import { createTestingPinia } from '@pinia/testing';
import { beforeMount } from '@playwright/experimental-ct-vue/hooks';
import type { StoreState } from 'pinia';
import 'sit-onyx/global.css';
import 'sit-onyx/style.css';
import type { useShoppingCartStore } from '../src/stores/shoppingCart';

export type HooksConfig = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  route?: any;
  store?: StoreState<ReturnType<typeof useShoppingCartStore>>;
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
