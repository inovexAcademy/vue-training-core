<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
  <h1>Movie {{ route.params.movieId }}</h1>
</template>
