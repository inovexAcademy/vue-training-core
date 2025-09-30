<script lang="ts" setup>
import { getProducts } from '@/shared/products';
import { OnyxPageLayout, OnyxHeadline, OnyxCard, OnyxLink } from 'sit-onyx';
import { computed } from 'vue';

const getProductForId = (id: number) => {
  const products = getProducts();
  return products.find(p => p.id === id);
};

let productId; // Get the proper product ID from the route params;

const product = getProductForId(productId);

const discountedPrice = computed<number | undefined>(() => {
  if (!product?.discountPercentage || product.discountPercentage <= 0)
    return undefined;
  return parseFloat(
    (product.price * (1 - product.discountPercentage / 100)).toFixed(2),
  );
});
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
      <p class="price" :class="{ 'has-discount': discountedPrice }">
        Price: {{ product.price }} $
      </p>
      <p v-if="discountedPrice" class="discounted-price">
        Discounted Price: {{ discountedPrice }} $
      </p>
    </OnyxCard>
  </OnyxPageLayout>
</template>

<style scoped lang="css">
.price {
  &.has-discount {
    text-decoration: line-through;
  }
}
</style>
