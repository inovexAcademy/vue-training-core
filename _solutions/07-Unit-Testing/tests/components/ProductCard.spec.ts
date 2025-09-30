import ProductCard from '@/components/ProductCard.vue';
import { createTestingPinia } from '@pinia/testing';
import { ComponentMountingOptions, mount } from '@vue/test-utils';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { OnyxButton, OnyxHeadline } from 'sit-onyx';
import type { ComponentProps } from 'vue-component-type-helpers';
import { routes } from '@/router/router';
import { createRouter, createWebHistory } from 'vue-router';

describe('ProductCard', () => {
  let router: ReturnType<typeof createRouter>;
  let mountingOptions: ComponentMountingOptions<typeof ProductCard>;

  beforeEach(async () => {
    router = createRouter({ history: createWebHistory(), routes });
    router.push('/');
    await router.isReady();

    mountingOptions = {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn }), router],
      },
    };
  });

  it('should render', () => {
    const { wrapper } = setup();

    expect(wrapper).toBeDefined();
  });

  it('should render title', () => {
    const { wrapper } = setup({
      id: 456,
      title: 'Product title',
      description: 'Product description',
      price: 9.99,
    });
    const titleWrapper = wrapper.findComponent(OnyxHeadline);

    expect(titleWrapper.text()).toEqual('Product title');
  });

  it('should render description', () => {
    const { wrapper } = setup({
      id: 456,
      title: 'Product title',
      description: 'Product description',
      price: 9.99,
    });
    const description = wrapper.find('.description');

    expect(description.text()).toEqual('Product description');
  });

  it('should render price', () => {
    const { wrapper } = setup({
      id: 456,
      title: 'Product title',
      description: 'Product description',
      price: 9.99,
    });
    const price = wrapper.find('.price');

    expect(price.text()).toEqual('Price: 9.99 $');
  });

  it('should render "Add to cart"-button with label', () => {
    const { wrapper } = setup();

    const button = wrapper.findComponent(OnyxButton);

    expect(button.attributes()['label']).toEqual('Add to cart');
  });

  it('when "Add to cart"-button is clicked, should emit add-to-cart event with product id', async () => {
    const { wrapper } = setup({
      id: 456,
      title: 'Product title',
      description: 'Product description',
      price: 9.99,
    });
    const button = wrapper
      .findComponent(OnyxButton)
      .find('[label="Add to cart"]');

    await button.trigger('click');

    expect(wrapper.emitted('add-to-cart').length).toEqual(1);
    expect(wrapper.emitted('add-to-cart')[0]).toEqual([456]);
  });

  const setup = (
    props: ComponentProps<typeof ProductCard> = {
      id: 123,
      title: 'Product title',
      description: 'Product description',
      price: 39.9,
    },
  ) => ({
    wrapper: mount(ProductCard, {
      ...mountingOptions,
      props,
    }),
  });
});
