<script setup lang="ts">
import { Plant, usePlantStore } from '@/store/plants';

const plantStore = usePlantStore();

const handleClick = (plant: Plant) => {
  // Bonus: Simulate an error when clicking the card
  throw new Error('Simulated error on product click', {
    cause: {
      plantId: plant.id,
      plantName: plant.name,
    },
  });
};
</script>

<template>
  <div class="list">
    <article v-for="plant in plantStore.filteredPlants" :key="plant.id">
      <span>{{ plant.icon }} </span>
      <span>{{ plant.name }}</span>
      <button @click="handleClick(plant)">Throw error</button>
    </article>
  </div>
</template>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 8px;

    img {
      width: 100px;
      height: auto;
      border-radius: 8px;
    }
  }
}
</style>
