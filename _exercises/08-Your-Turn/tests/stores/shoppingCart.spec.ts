import { useShoppingCartStore } from '@/stores/shoppingCart';
import { Product } from '@/types/common';
import { mockProducts } from '@tests/mocks/products';
import { createPinia, setActivePinia } from 'pinia';
import { beforeEach, describe, expect, it } from 'vitest';

describe('shoppingCart store', () => {
  let products: Product[];

  beforeEach(() => {
    products = mockProducts;
    setActivePinia(createPinia());
  });

  it('should start with empty cart', () => {
    const store = useShoppingCartStore();

    expect(store.cartItems).toEqual([]);
    expect(store.totalPrice).toBe('0.00');
  });

  it('should add a product to cart when addToCart is called', () => {
    const store = useShoppingCartStore();
    const product = products[0];

    store.addToCart(product);

    expect(store.cartItems.length).toBe(1);
    expect(store.cartItems[0]).toEqual({
      product,
      quantity: 1,
    });
  });

  it('should increment quantity if product is added twice', () => {
    const store = useShoppingCartStore();
    const product = products[0];

    store.addToCart(product);
    store.addToCart(product);

    expect(store.cartItems.length).toBe(1);
    expect(store.cartItems[0].quantity).toBe(2);
  });

  it('should calculate total price correctly', () => {
    const store = useShoppingCartStore();
    const productA = { ...products[0], price: 1 };
    const productB = { ...products[1], price: 2.5 };

    store.addToCart(productA);
    store.addToCart(productA);
    store.addToCart(productB);

    expect(store.totalPrice).toEqual('4.50');
  });

  it('should decrease quantity when removeFromCart is called and quantity becomes > 0', () => {
    const store = useShoppingCartStore();
    const product = products[0];

    store.addToCart(product);
    store.addToCart(product);
    store.removeFromCart(product.id);

    const item = store.cartItems.find(i => i.product.id === product.id);
    expect(item?.quantity).toEqual(1);
  });

  it('should remove item when when removeFromCart is called and quantity becomes 0', () => {
    const store = useShoppingCartStore();
    const product = products[0];

    store.addToCart(product);
    store.removeFromCart(product.id);

    const item = store.cartItems.find(i => i.product.id === product.id);
    expect(item).toBeUndefined();
  });
});
