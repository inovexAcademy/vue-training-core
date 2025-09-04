<script setup lang="ts">
import plus from '@sit-onyx/icons/plus.svg?raw';
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
  'add-to-cart': [event: Event, id: number];
}>();

const discountedPrice = computed<number | undefined>(() => {
  if (!props.discountPercentage || props.discountPercentage <= 0)
    return undefined;
  return parseFloat(
    (props.price * (1 - props.discountPercentage / 100)).toFixed(2),
  );
});

const addToCart = (event: Event) => {
  emit('add-to-cart', event, props.id);
};
</script>

<template>
  <OnyxCard>
    <OnyxHeadline is="h3">{{ props.title }}</OnyxHeadline>
    <p class="description">{{ props.description }}</p>
    <p class="price" :class="{ 'has-discount': discountedPrice }">
      Price: {{ props.price }} $
    </p>
    <p v-if="discountedPrice" class="discounted-price">
      Discounted Price: {{ discountedPrice }} $
    </p>
    <button
      label="Add to cart"
      :icon="plus"
      @click.stop.prevent.capture="addToCart"
    >
      Add
    </button>
  </OnyxCard>
</template>

<style scoped lang="css">
.price {
  &.has-discount {
    text-decoration: line-through;
  }
}
</style>
