<template>
  <div class="card">
    <template v-if="!props.loggedIn">
      <p data-testid="login-message">Login to continue</p>
      <button data-testid="login-button" @click="emit('login', true)">
        Login
      </button>
    </template>

    <p v-else data-testid="welcome-message">Welcome, {{ props.name }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = withDefaults(
  defineProps<{
    loggedIn?: boolean;
    name?: string;
  }>(),
  {
    loggedIn: false,
    name: '',
  },
);

const emit = defineEmits<{
  login: [success: boolean];
}>();
</script>

<style scoped lang="scss">
.card {
  border: 1px solid #ddd;
  padding: 2rem;
  border-radius: 4px;
  max-width: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
</style>
