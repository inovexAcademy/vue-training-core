<script lang="ts" setup>
import ProductCard from '@/components/ProductCard.vue';
import { OnyxHeadline } from 'sit-onyx';
</script>

<template>
  <div>
    <OnyxHeadline is="h1" class="title">Available Products</OnyxHeadline>
    <ul>
      <li>
        <ProductCard></ProductCard>
      </li>
      <li>
        <ProductCard></ProductCard>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="css">
.title {
  margin: 16px 0;
}

ul {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0;

  li {
    list-style: none;
  }
}
</style>
