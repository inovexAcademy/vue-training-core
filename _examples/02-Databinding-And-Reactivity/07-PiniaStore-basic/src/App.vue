<script setup lang="ts">
import { usePlantStore } from '@/store/plants';

const plantStore = usePlantStore();
</script>

<template>
  <div class="root">
    <h1>Plant Store</h1>

    <div class="list">
      <article v-for="plant in plantStore.filteredPlants" :key="plant.id">
        <span>{{ plant.icon }} </span>
        <span>{{ plant.name }}</span>
      </article>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.root {
  width: 100%;

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
}
</style>
