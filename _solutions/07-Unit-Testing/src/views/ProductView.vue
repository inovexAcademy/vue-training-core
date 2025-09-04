<script lang="ts" setup>
import { getProducts } from '@/shared/products';
import { OnyxPageLayout, OnyxHeadline, OnyxCard, OnyxLink } from 'sit-onyx';
import { useRoute, useRouter } from 'vue-router';

const getProductForId = (id: number) => {
  const products = getProducts();
  return products.find(p => p.id === id);
};

const route = useRoute();
const productId = Number(route.params.productId);

const product = getProductForId(productId);

// Pro challenge: Redirect if product not found
const router = useRouter();
if (!product) {
  router.replace('/product-not-found');
}
</script>

<template>
  <OnyxPageLayout v-if="product">
    <OnyxCard>
      <OnyxLink href="/">Go back to products</OnyxLink>
      <OnyxHeadline is="h1" class="title">
        Product {{ $route.params.productId }}
      </OnyxHeadline>
      <p>{{ product.description }}</p>
      <p>Brand: {{ product.brand }}</p>
      <p>Availability: {{ product.availabilityStatus }}</p>
      <p>Price: {{ product.price }} $</p>
    </OnyxCard>
  </OnyxPageLayout>
</template>
