import { createTestingPinia } from '@pinia/testing';
import { ComponentMountingOptions, mount } from '@vue/test-utils';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { mockShoppingCartItems } from '@tests/mocks/products';
import { useShoppingCartStore } from '@/stores/shoppingCart';
import ShoppingCart from '@/components/ShoppingCart.vue';
import { OnyxHeadline, OnyxIconButton } from 'sit-onyx';
import { ShoppingCartItem } from '@/types/common';

describe('ShoppingCart', () => {
  let mountingOptions: ComponentMountingOptions<typeof ShoppingCart>;

  beforeEach(() => {
    mountingOptions = {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn, stubActions: false })],
      },
    };
  });

  it('should render', () => {
    const { wrapper } = setup({});

    expect(wrapper).toBeDefined();
  });

  describe('given cart items', () => {
    let shoppingCartItems: ShoppingCartItem[];
    let totalPrice: number;
    let setupResult: SetupResult;

    beforeEach(() => {
      shoppingCartItems = mockShoppingCartItems;
      totalPrice = 1.23;
      setupResult = setup({ shoppingCartItems, totalPrice });
    });

    it('should render cart item list', () => {
      const { wrapper } = setupResult;
      const shoppingCartList = wrapper.find('[data-test-id="product-list"]');

      expect(shoppingCartList.exists()).toEqual(true);
    });

    it('should render all cart items', () => {
      const { wrapper } = setupResult;
      const shoppingCartItems = wrapper.findAll(
        '[data-test-id="product-list-item"]',
      );

      expect(shoppingCartItems.length).toEqual(shoppingCartItems.length);
    });

    it('should render cart items with title', () => {
      const { wrapper } = setupResult;
      const items = wrapper.findAll('[data-test-id="product-list-item"]');

      items.forEach((item, index) => {
        const mockItem = shoppingCartItems[index];
        const title = item.findComponent(OnyxHeadline).text();

        expect(title).toEqual(mockItem.product.title);
      });
    });

    it('should render cart items with quantity', () => {
      const { wrapper } = setupResult;
      const items = wrapper.findAll('[data-test-id="product-list-item"]');

      expect(items.length).toEqual(shoppingCartItems.length);

      items.forEach((item, index) => {
        const mockItem = shoppingCartItems[index];
        const quantity = item.find('p').element.textContent;

        expect(quantity).toEqual(`Quantity: ${mockItem.quantity}`);
      });
    });

    it('should render total price', () => {
      const { wrapper } = setupResult;
      const totalPriceElement = wrapper.find('.total-price');

      expect(totalPriceElement.text()).toEqual(`Total price: ${totalPrice} $`);
    });

    it('when remove button is clicked, should call shoppingCartStore.removeFromCart with item id', () => {
      const { wrapper, removeFromCartSpy } = setupResult;
      const removeButton = wrapper.findAllComponents(OnyxIconButton)[0];
      const mockItem = shoppingCartItems[0];

      removeButton.vm.$emit('click');

      expect(removeFromCartSpy).toHaveBeenCalledExactlyOnceWith(
        mockItem.product.id,
      );
    });
  });

  describe('given no cart items', () => {
    let setupResult: SetupResult;

    beforeEach(() => {
      setupResult = setup({ shoppingCartItems: [], totalPrice: 0 });
    });

    it('should not render cart item list', () => {
      const { wrapper } = setupResult;
      const cartItemList = wrapper.find('[data-test-id="product"]');

      expect(cartItemList.exists()).toEqual(false);
    });
  });

  const setup = ({
    shoppingCartItems = [],
    totalPrice = 0,
  }: {
    shoppingCartItems?: ShoppingCartItem[];
    totalPrice?: number;
  }) => {
    const shoppingCartStore = useShoppingCartStore();

    Object.defineProperties(shoppingCartStore, {
      cartItems: {
        get: () => shoppingCartItems,
      },
      totalPrice: {
        get: () => totalPrice,
      },
    });

    const removeFromCartSpy = vi.spyOn(shoppingCartStore, 'removeFromCart');
    const wrapper = mount(ShoppingCart, {
      ...mountingOptions,
    });

    return {
      wrapper,
      removeFromCartSpy,
      shoppingCartStore,
    };
  };

  type SetupResult = ReturnType<typeof setup>;
});
