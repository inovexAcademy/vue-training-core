<script lang="ts" setup>
import ProductList from '@/components/ProductList.vue';
import ShoppingCart from '@/components/ShoppingCart.vue';
import { Product, ShoppingCartItem } from '@/types/common';
import { OnyxPageLayout, OnyxSidebar } from 'sit-onyx';
import { ref } from 'vue';

const cartItems = ref<ShoppingCartItem[]>([]);
//    ^-- Use a Pinia store instead!

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
    <template #sidebarRight>
      <OnyxSidebar label="Example sidebar" alignment="right">
        <ShoppingCart v-model="cartItems"></ShoppingCart>
      </OnyxSidebar>
    </template>

    <ProductList @add-to-cart="handleAddToCart"></ProductList>
  </OnyxPageLayout>
</template>
