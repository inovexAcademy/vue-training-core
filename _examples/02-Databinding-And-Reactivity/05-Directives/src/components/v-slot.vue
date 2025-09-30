<script setup>
import Card from './v-slot-card.vue';
</script>

<template>
  <Card>
    <template #header>
      <h3>Are you sure?</h3>
    </template>
    <template #body>
      <p>You are about to delete xyz</p>
    </template>
  </Card>
</template>
