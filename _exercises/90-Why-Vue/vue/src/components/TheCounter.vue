<script setup lang="ts">
import { computed, ref } from 'vue';
import groceriesData from '../../../data.json';
import GroceryEntry from './GroceryEntry.vue';

export interface Grocery {
  id: number;
  name: string;
  quantity: number;
}

const groceries = ref<Grocery[]>([
  ...groceriesData,
  // { id: 3, name: 'Oranges', quantity: 4 },
  // { id: 4, name: 'Grapes', quantity: 2 },
  // { id: 5, name: 'Strawberries', quantity: 6 }
]);

const totalCount = computed<number>(() => {
  return groceries.value.reduce(
    (sum, grocery: Grocery) => sum + grocery.quantity,
    0,
  );
});

const incrementGrocery = (grocery: Grocery, newQuantity: number) => {
  const index = groceries.value.findIndex(g => g.id === grocery.id);
  if (index !== -1) {
    groceries.value[index]!.quantity = newQuantity;
  }
};

const decrementGrocery = (grocery: Grocery, newQuantity: number) => {
  const index = groceries.value.findIndex(g => g.id === grocery.id);
  if (index !== -1) {
    groceries.value[index]!.quantity = Math.max(newQuantity, 0);
  }
};
</script>

<template>
  <div class="root__counter">
    <GroceryEntry
      v-for="grocery in groceries"
      :key="grocery.id"
      :item="grocery"
      @increment="newValue => incrementGrocery(grocery, newValue)"
      @decrement="newValue => decrementGrocery(grocery, newValue)"
    />

    <p class="total-sum-counter">Total Sum: {{ totalCount }}</p>
  </div>
</template>

<style scoped lang="scss">
.root__counter {
  .total-sum-counter {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-top: 20px;
    font-weight: bold;
  }
}
</style>
