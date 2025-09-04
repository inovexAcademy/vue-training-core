import App from '@/App.vue';
import { routes } from '@/router/router';
import { createTestingPinia } from '@pinia/testing';
import { mount } from '@vue/test-utils';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { createRouter, createWebHistory } from 'vue-router';

describe('App', () => {
  let router: ReturnType<typeof createRouter>;

  beforeEach(() => {
    router = createRouter({ history: createWebHistory(), routes });
  });

  it('should render', () => {
    const { wrapper } = setup();

    expect(wrapper).toBeDefined();
  });

  const setup = () => ({
    wrapper: mount(App, {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn }), router],
      },
    }),
  });
});
