<script lang="ts" setup>
import { ref } from 'vue';

const name = ref('World');
const greeting = `Hello ${name.value}`;

setTimeout(() => {
  name.value = 'Vue!';
}, 1000);
</script>

<template>
  {{ greeting }}
</template>
