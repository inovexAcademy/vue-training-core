import { Product, ShoppingCartItem } from '@/types/common';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useShoppingCartStore = defineStore('shoppingCart', () => {
  const _cartItems = ref<ShoppingCartItem[]>([]);
  const totalPrice = computed(() =>
    _cartItems.value
      .reduce((sum, item) => {
        const discountedPrice = item.product.discountPercentage
          ? item.product.price * (1 - item.product.discountPercentage / 100)
          : item.product.price;
        return sum + discountedPrice * item.quantity;
      }, 0)
      .toFixed(2),
  );

  function addToCart(newCartItem: Product) {
    const isInCart = _cartItems.value.some(
      item => item.product.id === newCartItem.id,
    );

    if (isInCart) {
      _cartItems.value = _cartItems.value.map(item => {
        if (item.product.id !== newCartItem.id) return item;

        return { ...item, quantity: item.quantity + 1 };
      });
      return;
    }

    _cartItems.value = [
      ..._cartItems.value,
      { product: newCartItem, quantity: 1 },
    ];
  }

  function removeFromCart(productId: number) {
    _cartItems.value = _cartItems.value
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
    _cartItems,
    cartItems: computed(() => _cartItems.value),
    totalPrice,
    addToCart,
    removeFromCart,
  };
});
