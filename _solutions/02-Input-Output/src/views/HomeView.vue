<script lang="ts" setup>
import ProductList from '@/components/ProductList.vue';
import { OnyxPageLayout } from 'sit-onyx';
</script>

<template>
  <OnyxPageLayout data-testid="home-view">
    <ProductList></ProductList>
  </OnyxPageLayout>
</template>
