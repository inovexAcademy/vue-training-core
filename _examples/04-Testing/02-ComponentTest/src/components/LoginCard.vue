<script setup lang="ts">
import Button from './VButton.vue';

const props = withDefaults(
  defineProps<{
    isLoggedIn?: boolean;
    name?: string;
  }>(),
  {
    isLoggedIn: false,
    name: '',
  },
);

const emit = defineEmits<{
  login: [boolean];
  cancel: [];
}>();
</script>

<template>
  <div class="card">
    <template v-if="!props.isLoggedIn">
      <p data-testid="login-message">Login to continue</p>
      <Button data-testid="login-button" @click="emit('login', true)">
        Login
      </Button>
      <Button type="secondary" class="cancel-btn" @click="emit('cancel')"
        >Cancel</Button
      >
    </template>

    <p v-else data-testid="welcome-message">Welcome, {{ props.name }}</p>
  </div>
</template>

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
