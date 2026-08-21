<script setup lang="ts">
import { OnyxHeadline } from 'sit-onyx';

// TODO: Receive and render the shopping-cart state in exercises 3 and 4.
</script>

<template>
  <div class="shopping-cart">
    <OnyxHeadline is="h2">Shopping Cart</OnyxHeadline>
    <!-- Display the cart items and total price here. -->
  </div>
</template>

<style scoped>
.shopping-cart {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
}
</style>
