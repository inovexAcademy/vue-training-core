<script setup lang="ts">
import { OnyxIconButton, OnyxCard, OnyxHeadline } from 'sit-onyx';
import trash from '@sit-onyx/icons/trash.svg?raw';
import { useShoppingCartStore } from '@/stores/shoppingCart';

const shoppingCartStore = useShoppingCartStore();

function handleRemove(productId: number) {
  shoppingCartStore.removeFromCart(productId);
}
</script>

<template>
  <div class="shopping-cart">
    <OnyxHeadline is="h2">Shopping Cart</OnyxHeadline>
    <ul
      v-if="shoppingCartStore.cartItems.length > 0"
      data-test-id="product-list"
    >
      <li
        v-for="cartItem in shoppingCartStore.cartItems"
        :key="cartItem.product.id"
        data-test-id="product-list-item"
      >
        <OnyxCard>
          <OnyxHeadline is="h3">{{ cartItem.product.title }}</OnyxHeadline>

          <div class="card-content">
            <p>Quantity: {{ cartItem.quantity }}</p>
            <OnyxIconButton
              label="Remove"
              :icon="trash"
              @click="handleRemove(cartItem.product.id)"
            ></OnyxIconButton>
          </div>
        </OnyxCard>
      </li>
    </ul>
    <p class="total-price">Total price: {{ shoppingCartStore.totalPrice }} $</p>
  </div>
</template>

<style scoped lang="css">
.shopping-cart {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;

  ul {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 0;

    li {
      list-style: none;

      .card-content {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
      }
    }
  }
}
</style>
