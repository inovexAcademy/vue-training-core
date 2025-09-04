<script lang="ts" setup>
import { ref } from 'vue';

const isLoading = ref<boolean>(true);
const hasError = ref<boolean>(false);
</script>

<template>
  <div v-if="hasError">❌ Error</div>
  <div v-else-if="isLoading">⏳ Loading...</div>
  <div v-else>✅ Done</div>
</template>
