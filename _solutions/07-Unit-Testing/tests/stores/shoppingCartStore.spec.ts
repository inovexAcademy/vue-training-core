import { useShoppingCartStore } from '@/stores/shoppingCart';
import { mockProducts } from '@tests/mocks/products';
import { createPinia, setActivePinia } from 'pinia';
import { beforeEach, describe, expect, test } from 'vitest';

describe('shopping cart store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  describe('initial state', () => {
    test('it should start with an empty cart', () => {
      const store = useShoppingCartStore();

      expect(store.cartItems).toEqual([]);
      expect(store.totalPrice).toBe('0.00');
    });
  });

  describe('addToCart', () => {
    test('it should add a product to the cart with quantity 1', () => {
      const store = useShoppingCartStore();

      store.addToCart(mockProducts[0]);

      expect(store.cartItems).toHaveLength(1);
      expect(store.cartItems[0].product).toEqual(mockProducts[0]);
      expect(store.cartItems[0].quantity).toBe(1);
    });

    test('it should add multiple different products to the cart', () => {
      const store = useShoppingCartStore();

      store.addToCart(mockProducts[0]);
      store.addToCart(mockProducts[1]);
      store.addToCart(mockProducts[2]);

      expect(store.cartItems).toHaveLength(3);
      expect(store.cartItems[0].product.id).toBe(1);
      expect(store.cartItems[1].product.id).toBe(2);
      expect(store.cartItems[2].product.id).toBe(3);
    });

    test('it should increment quantity when adding the same product again', () => {
      const store = useShoppingCartStore();

      store.addToCart(mockProducts[0]);
      store.addToCart(mockProducts[0]);

      expect(store.cartItems).toHaveLength(1);
      expect(store.cartItems[0].quantity).toBe(2);
    });

    test('it should only increment the matching product quantity', () => {
      const store = useShoppingCartStore();

      store.addToCart(mockProducts[0]);
      store.addToCart(mockProducts[1]);
      store.addToCart(mockProducts[0]);

      expect(store.cartItems).toHaveLength(2);
      expect(store.cartItems[0].quantity).toBe(2);
      expect(store.cartItems[1].quantity).toBe(1);
    });
  });

  describe('removeFromCart', () => {
    test('it should decrement the quantity of a product', () => {
      const store = useShoppingCartStore();

      store.addToCart(mockProducts[0]);
      store.addToCart(mockProducts[0]);
      store.removeFromCart(mockProducts[0].id);

      expect(store.cartItems).toHaveLength(1);
      expect(store.cartItems[0].quantity).toBe(1);
    });

    test('it should remove the product entirely when quantity reaches 0', () => {
      const store = useShoppingCartStore();

      store.addToCart(mockProducts[0]);
      store.removeFromCart(mockProducts[0].id);

      expect(store.cartItems).toHaveLength(0);
    });

    test('it should not affect other products when removing one', () => {
      const store = useShoppingCartStore();

      store.addToCart(mockProducts[0]);
      store.addToCart(mockProducts[1]);
      store.removeFromCart(mockProducts[0].id);

      expect(store.cartItems).toHaveLength(1);
      expect(store.cartItems[0].product.id).toBe(2);
    });

    test('it should not change the cart when removing a non-existent product', () => {
      const store = useShoppingCartStore();

      store.addToCart(mockProducts[0]);
      store.removeFromCart(999);

      expect(store.cartItems).toHaveLength(1);
      expect(store.cartItems[0].quantity).toBe(1);
    });
  });

  describe('totalPrice', () => {
    test('it should calculate total price with discount for a single item', () => {
      const store = useShoppingCartStore();

      // Product 1: price 29.99, discount 10% → 29.99 * 0.9 = 26.991
      store.addToCart(mockProducts[0]);

      expect(store.totalPrice).toBe('26.99');
    });

    test('it should calculate total price accounting for quantity', () => {
      const store = useShoppingCartStore();

      // Product 1: 29.99 * 0.9 = 26.991 per unit, quantity 3 → 80.973
      store.addToCart(mockProducts[0]);
      store.addToCart(mockProducts[0]);
      store.addToCart(mockProducts[0]);

      expect(store.totalPrice).toBe('80.97');
    });

    test('it should sum prices across multiple products', () => {
      const store = useShoppingCartStore();

      // Product 1: 29.99 * 0.9 = 26.991
      // Product 2: 49.99 * 0.85 = 42.4915
      store.addToCart(mockProducts[0]);
      store.addToCart(mockProducts[1]);

      const expected = (29.99 * 0.9 + 49.99 * 0.85).toFixed(2);
      expect(store.totalPrice).toBe(expected);
    });

    test('it should update when a product is removed', () => {
      const store = useShoppingCartStore();

      store.addToCart(mockProducts[0]);
      store.addToCart(mockProducts[1]);
      store.removeFromCart(mockProducts[0].id);

      // Only Product 2 remains: 49.99 * 0.85 = 42.4915
      expect(store.totalPrice).toBe('42.49');
    });

    test('it should return 0.00 after all products are removed', () => {
      const store = useShoppingCartStore();

      store.addToCart(mockProducts[0]);
      store.removeFromCart(mockProducts[0].id);

      expect(store.totalPrice).toBe('0.00');
    });
  });
});
