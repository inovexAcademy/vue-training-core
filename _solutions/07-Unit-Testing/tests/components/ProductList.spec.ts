import ProductList from '@/components/ProductList.vue';
import { createTestingPinia } from '@pinia/testing';
import { ComponentMountingOptions, mount } from '@vue/test-utils';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import * as products from '@/shared/products';
import { mockProducts } from '@tests/mocks/products';
import ProductCard from '@/components/ProductCard.vue';
import { useShoppingCartStore } from '@/stores/shoppingCart';
import { Product } from '@/types/common';

describe('ProductList', () => {
  let mountingOptions: ComponentMountingOptions<typeof ProductList>;

  beforeEach(() => {
    mountingOptions = {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    };
  });

  it('should render', () => {
    const { wrapper } = setup({});

    expect(wrapper).toBeDefined();
  });

  describe('given available products', () => {
    let availableProducts: Product[];
    let setupResult: SetupResult;

    beforeEach(() => {
      availableProducts = mockProducts;
      setupResult = setup({ availableProducts });
    });

    it('should render product list', () => {
      const { wrapper } = setupResult;
      const productList = wrapper.find('[data-test-id="product-list"]');

      expect(productList.exists()).toEqual(true);
    });

    it('should render all product items', () => {
      const { wrapper } = setupResult;
      const items = wrapper.findAll('[data-test-id="product-list-item"]');

      expect(items.length).toEqual(mockProducts.length);
    });

    it('should render product items with product card and correct props', () => {
      const { wrapper } = setupResult;
      const items = wrapper.findAll('[data-test-id="product-list-item"]');

      expect(items.length).toEqual(availableProducts.length);

      items.forEach((item, index) => {
        const productCard = item.findComponent(ProductCard);

        expect(productCard).toBeDefined();

        const mockProduct = availableProducts[index];

        expect(productCard.props()).toEqual({
          id: mockProduct.id,
          title: mockProduct.title,
          description: mockProduct.description,
          price: mockProduct.price,
        });
      });
    });

    it('when ProductCard emits "add-to-card", should call shoppingCartStore.addToCart', () => {
      const product = availableProducts[0];
      const { wrapper, shoppingCartStore } = setupResult;
      const addToCartSpy = vi.spyOn(shoppingCartStore, 'addToCart');
      const firstProductCard = wrapper.findAllComponents(ProductCard).at(0);

      firstProductCard?.vm.$emit('add-to-cart', product.id);

      expect(addToCartSpy).toHaveBeenCalledExactlyOnceWith(product);
    });
  });

  describe('given no available products', () => {
    let setupResult: SetupResult;

    beforeEach(() => {
      setupResult = setup({ availableProducts: [] });
    });

    it('should render placeholder instead of product list', () => {
      const { wrapper } = setupResult;
      const productList = wrapper.find('[data-test-id="product-list"]');

      expect(productList.exists()).toEqual(false);

      const placeholder = wrapper.find('p');

      expect(placeholder.exists()).toEqual(true);
      expect(placeholder.text()).toEqual('No products available...');
    });
  });

  const setup = ({
    availableProducts = [],
  }: {
    availableProducts?: Product[];
  }) => {
    vi.spyOn(products, 'getProducts').mockReturnValue(availableProducts);

    const shoppingCartStore = useShoppingCartStore();
    const wrapper = mount(ProductList, {
      ...mountingOptions,
    });

    return {
      wrapper,
      shoppingCartStore,
    };
  };

  type SetupResult = ReturnType<typeof setup>;
});
