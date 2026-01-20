<script setup lang="ts">
const props = defineProps<{
  title: string;
  number: string;
}>();
</script>

<template>
  <div class="exercise-banner">
    <p>Exercise {{ props.number }}: {{ props.title }}</p>
  </div>
</template>

<style scoped>
.exercise-banner {
  background-color: #007acc;
  color: white;
  padding: 1rem;
  border: 2px solid #005f99;
  text-align: left;
  font-weight: bold;
  position: fixed;
  width: 100vw;
  top: 0;
}
</style>
