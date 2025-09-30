<script setup lang="ts">
import { reactive, ref } from 'vue';
const num = ref(2);
const obj = ref({ name: 'World' });
const reactiveObj = reactive({ name: 'World' });

console.info('ref(2).value => ', num);
console.info('ref({name: "World"}) => ', obj);
console.info('reactive({name: "World"}) => ', reactiveObj);
</script>

<template>
  <div>
    <h2>Ref and Reactive Structure</h2>
    <p>Ref with primitive value (number): {{ num }}</p>
    <p>Ref with object value: {{ obj }}</p>
    <p>Reactive object: {{ reactiveObj }}</p>
    <pre>👉 See Console for more details</pre>
  </div>
</template>
