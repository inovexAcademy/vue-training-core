<script setup lang="ts">
import { ref } from 'vue';

const name = ref('World');
const nameAttack = ref(`<img src=x onerror="alert('Hacked!')">`);
</script>

<template>
  <h1>Hello {{ name }}</h1>

  <br />
  <!-- <h1>Hello {{ nameAttack }}</h1> -->
  <!-- <h1 v-html="nameAttack"></h1> -->
</template>
