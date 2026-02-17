<script lang="ts" setup>
import ProductCard from '@/components/ProductCard.vue';
import { getProducts } from '@/shared/products';
import { OnyxHeadline } from 'sit-onyx';

const products = getProducts();

const handleAddToCart = (productId: number) => {
  window.alert(`Added product with Id ${productId} to cart`);
};
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
          @add-to-cart="handleAddToCart"
        ></ProductCard>
      </li>
      <li>
        <ProductCard
          :id="products[1].id"
          :title="products[1].title"
          :description="products[1].description"
          :price="products[1].price"
          @add-to-cart="handleAddToCart"
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
