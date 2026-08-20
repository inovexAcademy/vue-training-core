<script lang="ts" setup>
import { ref } from 'vue';

defineProps<{
  card: {
    name: string;
    symbol: string;
  };
}>();

const emit = defineEmits<{
  remove: [];
}>();

// This state belongs to the component instance, not to the card prop.
const note = ref('');
const instanceId = Math.random().toString(36).slice(2, 6).toUpperCase();
</script>

<template>
  <article class="card">
    <strong>{{ card.name }} {{ card.symbol }}</strong>
    <small>Component instance: {{ instanceId }}</small>
    <label>
      Local note
      <input v-model="note" placeholder="Type a note" />
    </label>
    <button @click="emit('remove')">Remove {{ card.name }}</button>
  </article>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  flex: 1 1 12rem;
  gap: 0.5rem;
  min-width: 12rem;
  padding: 0.75rem;
  border: 1px solid #999;
  border-radius: 0.5rem;
  box-sizing: border-box;
}

label {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

input {
  width: 100%;
  box-sizing: border-box;
}
</style>
