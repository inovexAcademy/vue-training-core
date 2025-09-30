import { Product, ShoppingCartItem } from '@/types/common';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useShoppingCartStore = defineStore('shoppingCart', () => {
  const cartItems = ref<ShoppingCartItem[]>([]);
  const totalPrice = computed(() =>
    cartItems.value
      .reduce((sum, item) => {
        const discountedPrice = item.product.discountPercentage
          ? item.product.price * (1 - item.product.discountPercentage / 100)
          : item.product.price;
        return sum + discountedPrice * item.quantity;
      }, 0)
      .toFixed(2),
  );

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
    //         ^-- This ensures the immutability of cartItems.
    //             Alternative solution:
    //               cartItems: readonly(cartItems)
    totalPrice,
    addToCart,
    removeFromCart,
  };
});
