<script setup lang="ts">
import plus from '@sit-onyx/icons/plus.svg?raw';
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
  <OnyxCard>
    <OnyxHeadline is="h3">{{ props.title }}</OnyxHeadline>
    <p class="description">{{ props.description }}</p>
    <p class="price">Price: {{ props.price }} $</p>
    <OnyxButton
      label="Add to cart"
      :icon="plus"
      @click="emit('add-to-cart', props.id)"
    ></OnyxButton>
  </OnyxCard>
</template>

<style scoped lang="css"></style>
