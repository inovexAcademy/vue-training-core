<script lang="ts" setup>
import ProductList from '@/components/ProductList.vue';
import { OnyxPageLayout } from 'sit-onyx';

// const cartItems: ShoppingCartItem[];
//       ^-- ProductList and ShoppingCart should be able to change the state
</script>

<template>
  <OnyxPageLayout>
    <!-- Add sidebar here -->
    <ProductList></ProductList>
  </OnyxPageLayout>
</template>
