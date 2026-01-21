<script setup lang="ts">
import { Grocery } from './TheCounter.vue';

const props = defineProps<{
  item: Grocery;
}>();

const emit = defineEmits<{
  (e: 'increment', newValue: number): void;
  (e: 'decrement', newValue: number): void;
  (e: 'reset'): void;
}>();

const increment = (count: number) => {
  emit('increment', count + 1);
};
const decrement = count => {
  emit('decrement', count - 1);
};
</script>

<template>
  <div class="grocery-row">
    <span for="count">{{ props.item.name }}</span>

    <div class="counter-wrapper">
      <span id="count">{{ props.item.quantity }}</span>

      <button @click="increment(props.item.quantity)">+</button>
      <button @click="decrement(props.item.quantity)">-</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.grocery-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.counter-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  > div {
    margin-inline-end: 16px;
  }
  > button {
    margin-inline-start: 6px;
  }
}
</style>
