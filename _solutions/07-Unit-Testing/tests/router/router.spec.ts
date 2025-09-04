import { flushPromises, mount } from '@vue/test-utils';
import { createRouter, createWebHistory, RouterLink } from 'vue-router';
import { routes } from '@/router/router';
import { describe } from 'node:test';
import { beforeEach, expect, it, vi } from 'vitest';
import App from '@/App.vue';
import HomeView from '@/views/HomeView.vue';
import { createTestingPinia } from '@pinia/testing';
import CheckoutView from '@/views/CheckoutView.vue';
import { createOnyx, OnyxLink } from 'sit-onyx';

describe('router', () => {
  let router: Router;

  beforeEach(async () => {
    router = createRouter({
      history: createWebHistory(),
      routes,
    });
  });

  it('route to checkout', async () => {
    router.push('/');

    await router.isReady();

    const { wrapper } = setup(router);

    const homeView = wrapper.findComponent(HomeView);

    expect(homeView.exists()).toEqual(true);

    homeView.findComponent(OnyxLink).trigger('click');

    await flushPromises();

    expect(wrapper.findComponent(CheckoutView).exists()).toEqual(true);
  });

  const setup = (router: Router) => {
    const onyx = createOnyx({ router });
    const wrapper = mount(App, {
      global: {
        plugins: [
          createTestingPinia({ createSpy: vi.fn, stubActions: false }),
          router,
          onyx,
        ],
      },
    });
    return { wrapper };
  };

  type Router = ReturnType<typeof createRouter>;
});
