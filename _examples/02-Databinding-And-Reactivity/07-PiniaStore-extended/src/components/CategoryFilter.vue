<script setup lang="ts">
import { usePlantStore } from '@/store/plants';

const plantStore = usePlantStore();
</script>

<template>
  <div class="filter">
    <h2>Filter</h2>
    <label>
      <input
        id="all"
        type="radio"
        value="all"
        :checked="plantStore.selectedType === 'all'"
        @input="plantStore.setSelectedType('all')"
      />
      All</label
    >

    <label v-for="type in plantStore.allPlantTypes" :key="type">
      <input
        :id="type"
        type="radio"
        :value="type"
        :checked="plantStore.selectedType === type"
        @input="plantStore.setSelectedType(type)"
      />
      {{ type }}
    </label>
  </div>
</template>

<style lang="scss" scoped>
.filter {
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin-bottom: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;

  h2 {
    margin: 0;
    font-size: 1rem;
    font-weight: bold;
  }

  label {
    display: flex;
    align-items: center;
    cursor: pointer;

    input {
      margin-right: 4px;
    }

    &:not(:last-child)::after {
      content: '';
      display: block;
      padding-right: 12px;
      border-right: 2px solid #ccc;
      height: 1.2em;
    }
  }
}
</style>
