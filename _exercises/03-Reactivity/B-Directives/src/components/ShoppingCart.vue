<script setup lang="ts">
import { ShoppingCartItem } from '@/types/common';
import { OnyxHeadline } from 'sit-onyx';
import { computed } from 'vue';

const props = defineProps<{ cartItems: ShoppingCartItem[] }>();

const totalPrice = computed(() =>
  props.cartItems
    .reduce((sum, item) => {
      const discountedPrice = item.product.discountPercentage
        ? item.product.price * (1 - item.product.discountPercentage / 100)
        : item.product.price;
      return sum + discountedPrice * item.quantity;
    }, 0)
    .toFixed(2),
);
</script>

<template>
  <div class="shopping-cart">
    <OnyxHeadline is="h2">Shopping Cart</OnyxHeadline>
    <pre>{{
      JSON.stringify(
        props.cartItems.map(item => ({
          product: item.product.title,
          quantity: item.quantity,
        })),
        null,
        2,
      )
    }}</pre>
    <p>Total price: {{ totalPrice }} $</p>
  </div>
</template>

<style scoped lang="css">
.shopping-cart {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
}
</style>
