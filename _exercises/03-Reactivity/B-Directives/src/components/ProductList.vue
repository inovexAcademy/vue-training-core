<script lang="ts" setup>
import ProductCard from '@/components/ProductCard.vue';
import { getProduct1, getProduct2 } from '@/shared/products';
import { Product } from '@/types/common';
import { OnyxHeadline } from 'sit-onyx';

const product1 = getProduct1();
const product2 = getProduct2();
const products = [product1, product2];

const emit = defineEmits<{
  'add-to-cart': [product: Product];
}>();

const handleAddToCart = (productId: number) => {
  const productToAdd = products.find(product => product.id === productId);

  if (!productToAdd) return;

  emit('add-to-cart', productToAdd);
};
</script>

<template>
  <div>
    <OnyxHeadline is="h1" class="title">Available Products</OnyxHeadline>
    <ul>
      <!-- The list should be dynamic -->
      <li>
        <ProductCard
          :id="product1.id"
          :title="product1.title"
          :description="product1.description"
          :price="product1.price"
          :discount-percentage="product1.discountPercentage"
          @add-to-cart="handleAddToCart"
        ></ProductCard>
      </li>
      <li>
        <ProductCard
          :id="product2.id"
          :title="product2.title"
          :description="product2.description"
          :price="product2.price"
          :discount-percentage="product2.discountPercentage"
          @add-to-cart="handleAddToCart"
        ></ProductCard>
      </li>
    </ul>
    <!-- "No products available..." -->
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
