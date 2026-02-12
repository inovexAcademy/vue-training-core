<script setup lang="ts">
import CategoryFilter from './components/CategoryFilter.vue';
import ErrorBoundary from './components/ErrorBoundary.vue';
import PlantList from './components/PlantList.vue';
</script>

<template>
  <ErrorBoundary>
    <div class="root">
      <h1>Plant Store</h1>

      <CategoryFilter />

      <PlantList />
    </div>
  </ErrorBoundary>
</template>

<style lang="scss" scoped>
.root {
  width: 100%;
}
</style>
