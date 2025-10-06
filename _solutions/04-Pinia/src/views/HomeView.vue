<script lang="ts" setup>
import ProductList from '@/components/ProductList.vue';
import ShoppingCart from '@/components/ShoppingCart.vue';
import { OnyxPageLayout, OnyxSidebar, useToast } from 'sit-onyx';

const toast = useToast();
toast.show({ headline: 'Test' });
</script>

<template>
  <OnyxPageLayout>
    <template #sidebarRight>
      <OnyxSidebar label="Example sidebar" alignment="right">
        <ShoppingCart></ShoppingCart>
      </OnyxSidebar>
    </template>

    <ProductList></ProductList>
  </OnyxPageLayout>
</template>
