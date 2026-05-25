<script lang="ts" setup>
import { onErrorCaptured, ref } from 'vue';

const error = ref<Error | null>(null);

onErrorCaptured((err: Error) => {
  error.value = err;
  // Return false to prevent the error from propagating further
  return true;
});

const reset = () => {
  error.value = null;
};
</script>

<template>
  <slot v-if="!error" />
  <div v-else class="error-boundary">
    <h2>Something went wrong</h2>
    <p>{{ error.message }}</p>
    <div>Cause: {{ error.cause }}</div>
    <button @click="reset">Try again</button>
  </div>
</template>

<style scoped>
.error-boundary {
  padding: 2rem;
  text-align: center;
  color: var(--onyx-color-text-icons-danger, #d32f2f);
}

.error-boundary h2 {
  margin-bottom: 0.5rem;
}

.error-boundary p {
  margin-bottom: 1rem;
  font-family: monospace;
}

.error-boundary button {
  padding: 0.5rem 1rem;
  cursor: pointer;
}
</style>
