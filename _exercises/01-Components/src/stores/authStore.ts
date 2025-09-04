import { defineStore } from 'pinia';
import { computed } from 'vue';

export const useAuthStore = defineStore('authStore', () => {
  // put custom computed etc. here
  const isLoggedIn = computed(() => true);
  const username = computed(() => 'training');

  const login = (path: string) => {
    console.log('Login action triggered with', path);
  };

  return { isLoggedIn, username, login };
});
