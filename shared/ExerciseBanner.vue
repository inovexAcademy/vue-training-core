<script setup lang="ts">
const props = defineProps<{
  number: string;
  title?: string;
}>();
</script>

<template>
  <div class="exercise-banner">
    <pre>
Exercise {{ props.number }} {{ props.title ? ':' : '' }} {{ props.title }}</pre
    >
  </div>
</template>

<style scoped>
.exercise-banner {
  color: white;
  padding: 0.4rem 0.75rem;
  border: 4px dashed #e65ad9;
  text-align: left;
  position: fixed;
  width: auto;
  border-radius: 12px;
  left: 8px;
  top: 8px;
  opacity: 0.7;
}
</style>
