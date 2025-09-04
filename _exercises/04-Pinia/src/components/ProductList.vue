<script setup lang="ts">
import ProductCard from '@/components/ProductCard.vue';
import { getProducts } from '@/shared/products';
import { Product } from '@/types/common';
import { OnyxHeadline } from 'sit-onyx';
import { ref } from 'vue';

const products = ref<Product[]>(getProducts());

const emit = defineEmits<{
  'add-to-cart': [product: Product];
}>();

const handleAddToCart = (productId: number) => {
  const productToAdd = products.value.find(product => product.id === productId);

  if (!productToAdd) return;

  emit('add-to-cart', productToAdd);
};
</script>

<template>
  <div>
    <OnyxHeadline is="h1" class="title">Available Products</OnyxHeadline>
    <ul v-if="products.length > 0">
      <li v-for="product in products" :key="product.id">
        <ProductCard
          :id="product.id"
          :title="product.title"
          :description="product.description"
          :price="product.price"
          @add-to-cart="handleAddToCart"
        ></ProductCard>
      </li>
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
