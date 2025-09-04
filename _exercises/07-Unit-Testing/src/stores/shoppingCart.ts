import { Product, ShoppingCartItem } from '@/types/common';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useShoppingCartStore = defineStore('shoppingCart', () => {
  const cartItems = ref<ShoppingCartItem[]>([]);
  const totalPrice = computed(() => {
    return cartItems.value
      .reduce((sum, item) => sum + item.product.price * item.quantity, 0)
      .toFixed(2);
  });

  function addToCart(newCartItem: Product) {
    const isInCart = cartItems.value.some(
      item => item.product.id === newCartItem.id,
    );

    if (isInCart) {
      cartItems.value = cartItems.value.map(item => {
        if (item.product.id !== newCartItem.id) return item;

        return { ...item, quantity: item.quantity + 1 };
      });
      return;
    }

    cartItems.value = [
      ...cartItems.value,
      { product: newCartItem, quantity: 1 },
    ];
  }

  function removeFromCart(productId: number) {
    cartItems.value = cartItems.value
      .map(item => {
        if (item.product.id === productId) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }

        return item;
      })
      .filter(item => item.quantity > 0);
  }

  return {
    cartItems: computed(() => cartItems.value),
    totalPrice,
    addToCart,
    removeFromCart,
  };
});
