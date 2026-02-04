<script lang="ts" setup>
import { type Dish } from './DishesList.vue';

const props = defineProps<{
  dishes: Dish[];
}>();
</script>

<template>
  <article class="dishes-summary">
    <h2>Summary</h2>
    <p>Total Dishes: {{ props.dishes.length }}</p>
    <p>
      Total Spicy Dishes: {{ props.dishes.filter(dish => dish.isSpicy).length }}
    </p>
  </article>
</template>

<style scoped lang="scss">
.dishes-summary {
  padding: 8px 16px;
  background-color: #f0f8ff;
  border-radius: 8px;

  h2 {
    margin-bottom: 4px;
    font-size: 1.2em;
    color: #333;
  }

  p {
    font-size: 0.9rem;
    color: #555;
  }
}
</style>
