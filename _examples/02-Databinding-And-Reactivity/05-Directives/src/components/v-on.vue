<script lang="ts" setup>
import { ref } from 'vue';

const input = ref<string>('');

const setInput = (event: InputEvent) => {
  const target = event.target as HTMLInputElement;
  input.value = target.value;
};
</script>

<template>
  <input
    name="demo-input"
    type="text"
    placeholder="Type something..."
    @input="setInput"
  />

  <p>Input value: {{ input }}</p>
</template>

<style lang="scss" scoped>
input {
  border: none;
  border-bottom: 2px solid #ccc;
  padding: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}
</style>
