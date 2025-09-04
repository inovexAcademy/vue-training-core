<script lang="ts" setup>
import ProductList from '@/components/ProductList.vue';
import ShoppingCart from '@/components/ShoppingCart.vue';
import { OnyxLink, OnyxPageLayout, OnyxSidebar } from 'sit-onyx';
</script>

<template>
  <OnyxPageLayout>
    <template #sidebar>
      <OnyxSidebar label="Example sidebar" alignment="right">
        <ShoppingCart></ShoppingCart>
        <div class="sidebar-cta">
          <OnyxLink href="/checkout">Go to Checkout</OnyxLink>
        </div>
      </OnyxSidebar>
    </template>

    <ProductList></ProductList>
  </OnyxPageLayout>
</template>

<style scoped lang="scss">
.sidebar-cta {
  padding: 16px;
  display: flex;
  justify-content: center;
}
</style>
