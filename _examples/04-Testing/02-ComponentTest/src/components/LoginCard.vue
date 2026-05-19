<script setup lang="ts">
import Button from './VButton.vue';

const props = withDefaults(
  defineProps<{
    isLoggedIn?: boolean;
    name?: string;
    details?: {
      lastLogin: string;
      timeToLogout: number;
      email: string;
      address: {
        city: string;
        country: string;
      };
    };
  }>(),
  {
    isLoggedIn: false,
    name: '',
    details: undefined,
  },
);

const emit = defineEmits<{
  login: [boolean];
  logout: [Date];
  cancel: [];
}>();

const logout = (timestamp: Date) => {
  emit('logout', timestamp);
};
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

    <div v-else>
      <p data-testid="welcome-message">Welcome, {{ props.name }}</p>
      <div v-if="props.details" data-testid="details">
        <p>Last Login: {{ props.details.lastLogin }}</p>
        <p>Time to Logout: {{ props.details.timeToLogout }} minutes</p>
        <p>Email: {{ props.details.email }}</p>
        <p>
          Address: {{ props.details.address.city }},
          {{ props.details.address.country }}
        </p>
      </div>
      <button data-testid="logout-button" @click="logout(new Date())">
        Logout
      </button>
    </div>
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
