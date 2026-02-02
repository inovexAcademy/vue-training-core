<script setup lang="ts">
import { iconPlus } from '@sit-onyx/icons';
import { OnyxButton, OnyxCard, OnyxHeadline } from 'sit-onyx';

const props = defineProps<{
  id: number;
  title: string;
  description: string;
  price: number;
}>();

const emit = defineEmits<{
  'add-to-cart': [id: number];
}>();
</script>

<template>
  <div class="product-card-wrapper">
    <OnyxCard>
      <OnyxHeadline is="h3">{{ props.title }}</OnyxHeadline>
      <p class="description">{{ props.description }}</p>
      <p class="price">Price: {{ props.price }} $</p>
    </OnyxCard>
    <OnyxButton
      class="add-to-cart-button"
      label="Add to cart"
      :icon="iconPlus"
      @click.stop="emit('add-to-cart', props.id)"
    ></OnyxButton>
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
