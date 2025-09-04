<script lang="ts" setup>
import { ref } from 'vue';
import LoginCard from './components/LoginCard.vue';

const loggedIn = ref(false);
const name = ref('');

const login = () => {
  loggedIn.value = true;
  name.value = 'Dieter Schwarz';
};
</script>

<template>
  <LoginCard :name="name" :logged-in="loggedIn" @update:log-in="login" />
</template>
