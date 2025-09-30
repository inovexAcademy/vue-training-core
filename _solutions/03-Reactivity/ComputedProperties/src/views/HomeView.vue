<script lang="ts" setup>
import ProductList from '@/components/ProductList.vue';
import { Product, ShoppingCartItem } from '@/types/common';
import { OnyxPageLayout } from 'sit-onyx';
import { ref } from 'vue';

const cartItems = ref<ShoppingCartItem[]>([]);

function handleAddToCart(newCartItem: Product) {
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

  cartItems.value = [...cartItems.value, { product: newCartItem, quantity: 1 }];
}
</script>

<template>
  <OnyxPageLayout>
    <ProductList></ProductList>
  </OnyxPageLayout>
</template>
