<script lang="ts" setup>
import { ref } from 'vue';
import LoginCard from './components/LoginCard.vue';

const isLoggedIn = ref(false);
const name = ref('');

const login = () => {
  isLoggedIn.value = true;
  name.value = 'Dieter Schwarz';
};
</script>

<template>
  <LoginCard :name="name" :is-logged-in="isLoggedIn" @login="login" />
</template>
