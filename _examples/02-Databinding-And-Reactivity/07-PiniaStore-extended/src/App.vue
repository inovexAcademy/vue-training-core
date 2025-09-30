<script setup lang="ts">
import CategoryFilter from './components/CategoryFilter.vue';
import PlantList from './components/PlantList.vue';
</script>

<template>
  <div class="root">
    <h1>Plant Store</h1>

    <CategoryFilter />

    <PlantList />
  </div>
</template>

<style lang="scss" scoped>
.root {
  width: 100%;
}
</style>
