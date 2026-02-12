<script setup lang="ts">
import ProductCard from '@/components/ProductCard.vue';
import { getProducts } from '@/shared/products';
import { Product } from '@/types/common';
import { OnyxHeadline } from 'sit-onyx';

const products = getProducts();

const emit = defineEmits<{
  'add-to-cart': [product: Product];
}>();

const handleAddToCart = (productId: number) => {
  const productToAdd = products.find(product => product.id === productId);

  if (!productToAdd) return;

  emit('add-to-cart', productToAdd);
};

const handleProductClick = (productId: number) => {};
</script>

<template>
  <div>
    <OnyxHeadline is="h1" class="title">Available Products</OnyxHeadline>
    <ul>
      <li>
        <ProductCard
          :id="products[0].id"
          :title="products[0].title"
          :description="products[0].description"
          :price="products[0].price"
          :discount-percentage="products[0].discountPercentage"
          @add-to-cart="handleAddToCart"
          @product-click="handleProductClick(products[0].id)"
        ></ProductCard>
      </li>
      <li>
        <ProductCard
          :id="products[1].id"
          :title="products[1].title"
          :description="products[1].description"
          :price="products[1].price"
          :discount-percentage="products[1].discountPercentage"
          @add-to-cart="handleAddToCart"
          @product-click="handleProductClick(products[1].id)"
        ></ProductCard>
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
