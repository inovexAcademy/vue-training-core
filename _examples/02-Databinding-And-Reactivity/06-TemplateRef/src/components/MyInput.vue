<script setup lang="ts">
import { useTemplateRef, defineExpose } from 'vue';

const myInput = useTemplateRef('my-input');

defineExpose({
  input: myInput,
});
</script>

<template>
  <div>
    <label for="my-input">My Input:</label>
    <input id="my-input" ref="my-input" type="text" />
  </div>
</template>
