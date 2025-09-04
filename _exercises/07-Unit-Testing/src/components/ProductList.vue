<script setup lang="ts">
import ProductCard from '@/components/ProductCard.vue';
import { getProducts } from '@/shared/products';
import { useShoppingCartStore } from '@/stores/shoppingCart';
import { Product } from '@/types/common';
import { OnyxHeadline } from 'sit-onyx';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const products = ref<Product[]>(getProducts());
const shoppingCartStore = useShoppingCartStore();

const handleAddToCart = (productId: number) => {
  const productToAdd = products.value.find(product => product.id === productId);

  if (!productToAdd) return;

  shoppingCartStore.addToCart(productToAdd);
};

const router = useRouter();
</script>

<template>
  <div>
    <OnyxHeadline is="h1" class="title">Available Products</OnyxHeadline>
    <ul v-if="products.length > 0">
      <li
        v-for="product in products"
        :key="product.id"
        @click="router.push(`/product/${product.id}`)"
      >
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
  cursor: pointer;
  transition: transform 0.1s ease-in-out;

  &:hover {
    transform: scale(1.01);
  }
}
</style>
