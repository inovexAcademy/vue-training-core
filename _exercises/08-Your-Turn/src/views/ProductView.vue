<script lang="ts" setup>
import { getProducts } from '@/shared/products';
import { OnyxPageLayout, OnyxHeadline, OnyxCard, OnyxLink } from 'sit-onyx';
import { useRouter } from 'vue-router';

const router = useRouter();
const { productId } = router.currentRoute.value.params; // Get the proper product ID from the route params;

const getProductForId = (id: number) => {
  const products = getProducts();
  return products.find(p => p.id === id);
};

const product = getProductForId(Number(productId));
</script>

<template>
  <OnyxPageLayout>
    <OnyxCard>
      <OnyxLink href="/">Go back to products</OnyxLink>
      <OnyxHeadline is="h1" class="title">
        <!-- Display the product ID, taken from the route params, here -->
        Product {{}}
      </OnyxHeadline>
      <p>{{ product.description }}</p>
      <p>Brand: {{ product.brand }}</p>
      <p>Availability: {{ product.availabilityStatus }}</p>
      <p>Price: {{ product.price }} $</p>
    </OnyxCard>
  </OnyxPageLayout>
</template>
