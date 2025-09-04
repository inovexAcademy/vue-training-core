<script lang="ts" setup>
import { computed, ref } from 'vue';

const input = ref<string>('hello');
const checked = ref<boolean>(false);

const hasError = computed<boolean>(() => {
  return input.value ? input.value.length < 3 : false;
});
</script>

<template>
  <form>
    <input
      v-model="input"
      type="text"
      name="demo-input"
      class="name-input"
      :class="{ error: hasError }"
      placeholder="Type your name..."
    />
    <p>Value: {{ input }}</p>

    <div class="check">
      <input id="demo-checkbox" v-model="checked" type="checkbox" />
      <label for="demo-checkbox">{{ checked }}</label>
    </div>
  </form>
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
}

.check {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-block-start: 1rem;
}
</style>
