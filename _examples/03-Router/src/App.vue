<script setup lang="ts">
import { OnyxLink } from 'sit-onyx';
import { RouterView, RouterLink } from 'vue-router';
</script>

<template>
  <nav>
    <OnyxLink href="/">Home</OnyxLink>
    <OnyxLink href="/about">About</OnyxLink>
    <RouterLink :to="{ name: 'home' }">Home (RouterLink)</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
nav {
  background: lightgray;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 2rem 0;
}

main {
  display: flex;
  justify-content: center;
  padding: 1rem 0;
}
</style>

<style>
body {
  all: unset;
}
</style>
