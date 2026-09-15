<script lang="ts">
export type LoginCardProps = {
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
};
</script>

<script setup lang="ts">
import { ref } from 'vue';
import LoginCard from '../../src/components/LoginCard.vue';

defineProps<LoginCardProps>();

// Emits are recorded into hidden inputs for the spec to assert with toHaveValue().
const lastLogin = ref('');
const cancelEvents = ref<string[]>([]);

const onLogin = (value: boolean) => {
  lastLogin.value = 'LOGIN_EVENT:' + value;
};
const onCancel = () => {
  cancelEvents.value.push('CANCEL_EVENT');
};
</script>

<template>
  <LoginCard
    :is-logged-in="isLoggedIn"
    :name="name"
    :details="details"
    @login="onLogin"
    @cancel="onCancel"
  />
  <form hidden>
    <input data-testid="login-emit" :value="lastLogin" readonly />
    <input
      data-testid="cancel-events"
      :value="JSON.stringify(cancelEvents)"
      readonly
    />
  </form>
</template>
