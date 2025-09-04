<script lang="ts" setup>
import { ref } from 'vue';

const isError = ref<boolean>(false);
const isActive = ref(true);
</script>

<template>
  <input
    class="name-input"
    :class="{ error: isError, active: isActive }"
    type="text"
    placeholder="Type something..."
  />
</template>

<style lang="scss" scoped>
.name-input {
  border: none;
  border-bottom: 2px solid #ccc;
  padding: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

  &.error {
    border: 3px solid red;
  }

  &.active {
    background-color: #e5f9eb;
  }
}
</style>
