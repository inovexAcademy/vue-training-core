<script lang="ts" setup>
import ProductList from '@/components/ProductList.vue';
import ShoppingCart from '@/components/ShoppingCart.vue';
import { OnyxPageLayout, OnyxSidebar } from 'sit-onyx';
</script>

<template>
  <OnyxPageLayout>
    <template #sidebar>
      <OnyxSidebar label="Example sidebar" alignment="right">
        <ShoppingCart></ShoppingCart>
      </OnyxSidebar>
    </template>

    <ProductList></ProductList>
  </OnyxPageLayout>
</template>
