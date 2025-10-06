<script setup lang="ts">
import { iconTrash } from '@sit-onyx/icons';
import { OnyxCard, OnyxHeadline, OnyxIconButton } from 'sit-onyx';

// const cartItems: ShoppingCartItem[];
//       ^-- Should be received from HomeView
</script>

<template>
  <div class="shopping-cart">
    <OnyxHeadline is="h2">Shopping Cart</OnyxHeadline>
    <ul>
      <!-- The list should be dynamic -->
      <li>
        <OnyxCard>
          <OnyxHeadline is="h3">Product Title</OnyxHeadline>

          <div class="card-content">
            <p>Quantity: -</p>
            <OnyxIconButton label="Remove" :icon="iconTrash"></OnyxIconButton>
            <!-- ^-- Should remove cart items on click -->
          </div>
        </OnyxCard>
      </li>
    </ul>
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
