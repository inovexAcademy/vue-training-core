<script lang="ts" setup>
import { ref } from 'vue';

const name = ref('World');

const greeting1 = `Hello ${name.value}`;
const greeting2 = () => {
  return `Hello ${name.value}`;
};
const greeting3 = (name: string) => {
  return `Hello ${name}`;
};

// change name value after time
setTimeout(() => {
  name.value = 'Vue 🫶';
}, 1700);
</script>

<template>
  Value: {{ name }}
  <br />
  <br />
  <!-- ❌ does not get updated on name change because greeting is a static value, only assigned once -->
  1. {{ greeting1 }}
  <br />
  <!-- ✅ gets updated on name change because greeting is a function which can be stored as effect on track -->
  2. {{ greeting2() }}
  <br />
  <!-- ✅ gets updated on name change because the parameter is recognized within the function body at compile time -->
  3. {{ greeting3(name) }}
</template>
