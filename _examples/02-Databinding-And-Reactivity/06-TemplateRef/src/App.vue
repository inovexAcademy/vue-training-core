<script lang="ts" setup>
import { useTemplateRef } from 'vue';
import MyInput from './components/MyInput.vue';

const input = useTemplateRef('name-input');

const myCustomInput = useTemplateRef('my-custom-input');

const focusInput = () => {
  input.value.focus();
};

const focusMyCustomInput = () => {
  console.log(myCustomInput.value.input.focus());
};
</script>

<template>
  <input ref="name-input" type="text" />
  <button @click="focusInput">Focus Input</button>

  <br />

  <MyInput ref="my-custom-input" />
  <button @click="focusMyCustomInput">Focus My Custom Input</button>
</template>

<style lang="scss" scoped>
button {
  margin-block-start: 1rem;
}
</style>
