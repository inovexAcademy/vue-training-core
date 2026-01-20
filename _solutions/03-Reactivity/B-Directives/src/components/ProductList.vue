<script setup lang="ts">
import ProductCard from '@/components/ProductCard.vue';
import { getProducts } from '@/shared/products';
import { Product } from '@/types/common';
import { OnyxHeadline } from 'sit-onyx';

const products = getProducts();

const emit = defineEmits<{
  'add-to-cart': [product: Product];
}>();

const handleAddToCart = (id: number) => {
  const productToAdd = products.find(product => product.id === id);
  if (!productToAdd) return;

  emit('add-to-cart', productToAdd);
};
</script>

<template>
  <div>
    <OnyxHeadline is="h1" class="title">Available Products</OnyxHeadline>
    <ul v-if="products.length > 0" data-test-id="product-list">
      <ProductCard
        :id="products[0].id"
        :title="products[0].title"
        :description="products[0].description"
        :price="products[0].price"
        :discount-percentage="products[0].discountPercentage"
        @add-to-cart="handleAddToCart"
      ></ProductCard>
    </ul>
    <p v-else>No products available...</p>
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
}

li {
  list-style: none;
}
</style>
