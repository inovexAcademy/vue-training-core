<script lang="ts" setup>
import ProductList from '@/components/ProductList.vue';
import { OnyxPageLayout } from 'sit-onyx';
// import { type ShoppingCartItem, type Product } from '@/types/common';

// define cartItems of type ShoppingCartItem[] here
//          ^-- ProductList and ShoppingCart should be able to change this state then
</script>

<template>
  <OnyxPageLayout>
    <!-- Add sidebar with ShoppingCart component here -->
    <ProductList></ProductList>
  </OnyxPageLayout>
</template>
