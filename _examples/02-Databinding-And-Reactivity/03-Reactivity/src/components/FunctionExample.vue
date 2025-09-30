<script lang="ts" setup>
import { ref } from 'vue';

const name = ref('World');
const greeting1 = `Hello ${name.value}`;
const greeting2 = () => `Hello ${name.value}`;

setTimeout(() => {
  name.value = 'Vue 🫶';
}, 1500);
</script>

<template>
  <!-- ❌ does not get updated on name change because greeting is a static value -->
  {{ greeting1 }}
  <br />
  <!-- ✅ gets updated on name change because greeting is a function which can be stored as effect on track -->
  {{ greeting2() }}
</template>
