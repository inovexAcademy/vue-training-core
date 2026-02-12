<script setup lang="ts">
import { iconPlus } from '@sit-onyx/icons';
import { OnyxButton, OnyxCard, OnyxHeadline } from 'sit-onyx';
import { computed } from 'vue';

const props = defineProps<{
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage?: number;
}>();

const emit = defineEmits<{
  'add-to-cart': [id: number];
  'product-click': [id: number];
}>();

const discountedPrice = computed<number | undefined>(() => {
  if (!props.discountPercentage || props.discountPercentage <= 0)
    return undefined;
  return parseFloat(
    (props.price * (1 - props.discountPercentage / 100)).toFixed(2),
  );
});
</script>

<template>
  <div class="product-card-wrapper">
    <OnyxCard
      class="product-card"
      clickable
      @click="$emit('product-click', props.id)"
    >
      <OnyxHeadline is="h3">{{ props.title }}</OnyxHeadline>
      <p class="description">{{ props.description }}</p>
      <p class="price" :class="{ 'has-discount': discountedPrice }">
        Price: {{ props.price }} $
      </p>
      <p v-if="discountedPrice" class="discounted-price">
        Discounted Price: {{ discountedPrice }} $
      </p>
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
}

.product-card {
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.01);
  }
}

.add-to-cart-button {
  margin-top: 0.5rem;
  margin-left: 0.5rem;
  margin-bottom: 1rem;
  align-self: flex-end;
}

.price {
  &.has-discount {
    text-decoration: line-through;
  }
}
</style>
