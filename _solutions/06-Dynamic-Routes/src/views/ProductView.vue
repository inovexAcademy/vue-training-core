<script lang="ts" setup>
import { getProducts } from '@/shared/products';
import { OnyxCard, OnyxHeadline, OnyxLink, OnyxPageLayout } from 'sit-onyx';
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const getProductForId = (id: number) => {
  const products = getProducts();
  return products.find(p => p.id === id);
};

const route = useRoute();
const productId = Number(route.params.productId);

const product = getProductForId(productId);

// Bonus: Redirect if product not found
const router = useRouter();
if (!product) {
  router.replace('/product-not-found');
}

const discountedPrice = computed<number | undefined>(() => {
  if (!product?.discountPercentage || product.discountPercentage <= 0)
    return undefined;
  return parseFloat(
    (product.price * (1 - product.discountPercentage / 100)).toFixed(2),
  );
});
</script>

<template>
  <OnyxPageLayout v-if="product">
    <OnyxCard>
      <OnyxLink href="/">Go back to products</OnyxLink>
      <OnyxHeadline is="h1" class="title">
        Product {{ route.params.productId }}
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
