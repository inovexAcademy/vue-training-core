<script lang="ts" setup>
import ProductCard from '@/components/ProductCard.vue';
import { getProduct1, getProduct2 } from '@/shared/products';
import { OnyxHeadline } from 'sit-onyx';

const product1 = getProduct1();
const product2 = getProduct2();

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
          :id="product1.id"
          :title="product1.title"
          :description="product1.description"
          :price="product1.price"
          @add-to-cart="handleAddToCart"
        >
        </ProductCard>
      </li>
      <li>
        <ProductCard
          :id="product2.id"
          :title="product2.title"
          :description="product2.description"
          :price="product2.price"
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
