<script setup lang="ts">
import { iconPlus } from '@sit-onyx/icons';
import { OnyxButton, OnyxCard, OnyxHeadline } from 'sit-onyx';
</script>

<template>
  <div class="product-card-wrapper">
    <OnyxCard>
      <OnyxHeadline is="h3">Available Products</OnyxHeadline>
      <p>A delicious fruit</p>
      <p>Price: 29,99 $</p>
      <!-- ^-- All information above should be dynamic -->
    </OnyxCard>
    <OnyxButton
      class="add-to-cart-button"
      label="Add to cart"
      :icon="iconPlus"
    ></OnyxButton>
    <!-- ^-- Should tell parents to add a product to the cart -->
  </div>
</template>

<style scoped lang="css">
.product-card-wrapper {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.015);
  }
}

.add-to-cart-button {
  margin-left: 0.5rem;
  margin-bottom: 1rem;
  align-self: flex-end;
}
</style>
