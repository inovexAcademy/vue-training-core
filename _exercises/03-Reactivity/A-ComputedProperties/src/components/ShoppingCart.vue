<script setup lang="ts">
import { OnyxHeadline } from 'sit-onyx';

// cartItems (ShoppingCartItem[]) should be received here from HomeView

// create a computed property "totalPrice" that calculates the total price of all items in the cart
</script>

<template>
  <div class="shopping-cart">
    <OnyxHeadline is="h2">Shopping Cart</OnyxHeadline>
    <!-- Render the total price here -->
    <p>Total price: {{}} $</p>
  </div>
</template>

<style scoped lang="css">
.shopping-cart {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
}
</style>
