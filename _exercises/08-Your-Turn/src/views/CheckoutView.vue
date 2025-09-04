<script setup lang="ts">
import ShoppingCart from '@/components/ShoppingCart.vue';
import { useShoppingCartStore } from '@/stores/shoppingCart';
import {
  OnyxButton,
  OnyxCard,
  OnyxHeadline,
  OnyxLink,
  OnyxPageLayout,
} from 'sit-onyx';

const shoppingCartStore = useShoppingCartStore();
</script>

<template>
  <OnyxPageLayout>
    <OnyxHeadline is="h1" class="title">Checkout</OnyxHeadline>
    <OnyxCard>
      <div v-if="shoppingCartStore.cartItems.length === 0">
        <p>Your cart is empty.</p>
      </div>
      <div v-else>
        <ShoppingCart />
        <div class="checkout-cta">
          <OnyxButton label="Complete Purchase" />
        </div>
      </div>
      <OnyxLink href="/">Go back to shopping</OnyxLink>
    </OnyxCard>
  </OnyxPageLayout>
</template>

<style scoped lang="scss">
.title {
  margin: 16px 0;
}

.checkout-cta {
  margin-top: 16px;
  display: flex;
  justify-content: center;
}
</style>
