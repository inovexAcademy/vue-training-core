<script setup lang="ts">
import { iconPlus } from '@sit-onyx/icons';
import { OnyxButton, OnyxCard, OnyxHeadline } from 'sit-onyx';
</script>

<template>
  <div class="product-card-wrapper">
    <OnyxCard>
      <OnyxHeadline is="h2">Available Products</OnyxHeadline>
      <p>A delicious fruit</p>
      <p>Price: 29,99 $</p>
    </OnyxCard>
    <OnyxButton
      class="add-to-cart-button"
      label="Add to cart"
      :icon="iconPlus"
    />
  </div>
</template>

<style scoped lang="css">
.product-card-wrapper {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0.5rem;
}

.add-to-cart-button {
  margin-top: 0.5rem;
  margin-left: 0.5rem;
  margin-bottom: 1rem;
  align-self: flex-end;
}
</style>
