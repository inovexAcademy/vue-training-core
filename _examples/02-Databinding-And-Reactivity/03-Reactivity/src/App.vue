<script lang="ts" setup>
import { ref } from 'vue';
import RefAndFunctionExample from './components/RefAndFunctionExample.vue';
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

  <RefAndFunctionExample />
  <br />
  <br />
  <RefAndReactiveStructure />
</template>
