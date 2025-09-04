<script lang="ts" setup>
import { ref } from 'vue';
import ListsExample from './components/ListsExample.vue';

const name = ref('World');

setTimeout(() => {
  name.value = 'Vue 🫶';
}, 1500);
</script>

<template>
  {{ name }}

  <ListsExample />
</template>
