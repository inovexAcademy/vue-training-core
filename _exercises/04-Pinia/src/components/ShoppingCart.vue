<script setup lang="ts">
import { ShoppingCartItem } from '@/types/common';
import { iconTrash } from '@sit-onyx/icons';
import { OnyxCard, OnyxHeadline, OnyxIconButton } from 'sit-onyx';
import { computed } from 'vue';

const cartItems = defineModel<ShoppingCartItem[]>({ required: true });

const removeProductFromCart = (productId: number) => {
  cartItems.value = cartItems.value
    .map(item => {
      if (item.product.id === productId) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }

      return item;
    })
    .filter(item => item.quantity > 0);
};

const totalPrice = computed(() =>
  cartItems.value
    .reduce((sum, item) => {
      const discountedPrice = item.product.discountPercentage
        ? item.product.price * (1 - item.product.discountPercentage / 100)
        : item.product.price;
      return sum + discountedPrice * item.quantity;
    }, 0)
    .toFixed(2),
);
</script>

<template>
  <div class="shopping-cart">
    <OnyxHeadline is="h2">Shopping Cart</OnyxHeadline>
    <ul v-if="cartItems.length > 0">
      <!--    ^-- Should come from the Pinia store! -->
      <li v-for="cartItem in cartItems" :key="cartItem.product.id">
        <OnyxCard>
          <OnyxHeadline is="h3">{{ cartItem.product.title }}</OnyxHeadline>

          <div class="card-content">
            <p>Quantity: {{ cartItem.quantity }}</p>
            <OnyxIconButton
              label="Remove"
              :icon="iconTrash"
              @click="() => removeProductFromCart(cartItem.product.id)"
            ></OnyxIconButton>
          </div>
        </OnyxCard>
      </li>
    </ul>
    <p>Total price: {{ totalPrice }} $</p>
    <!--               ^-- Should come from the Pinia store! -->
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
