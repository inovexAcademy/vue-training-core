<script lang="ts" setup>
import { defineProps } from 'vue';
const props = withDefaults(
  defineProps<{
    type?: 'primary' | 'secondary';
  }>(),
  {
    type: 'primary',
  },
);

const emit = defineEmits<{
  click: [];
}>();
</script>

<template>
  <button :class="`btn btn-${props.type}`" @click="emit('click')">
    <slot />
  </button>
</template>

<style scoped lang="scss">
.btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  color: white;
}
.btn-primary {
  background-color: #007bff;
}
.btn-secondary {
  background-color: #b3b5b6;
}
</style>
