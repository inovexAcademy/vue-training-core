<script lang="ts" setup>
import { ref } from 'vue';
import FunctionExample from './components/FunctionExample.vue';
import RefAndReactiveStructure from './components/RefAndReactiveStructure.vue';

const name = ref('Hello World');

setTimeout(() => {
  name.value = 'Hello Vue 🫶';
}, 1500);
</script>

<template>
  <h2>Reactivity Basics</h2>
  {{ name }}
  <br />

  <FunctionExample />
  <br />
  <br />
  <RefAndReactiveStructure />
</template>
