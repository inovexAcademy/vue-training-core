<script setup lang="ts">
import { OnyxPageLayout } from 'sit-onyx';
import { ref } from 'vue';
const isDisabled = ref(true);
const myObject = ref({ a: 'A', b: { count: 2 }, c: 'hallo' });
</script>

<template>
  <OnyxPageLayout :disabled="2 + 2">
    Hello world!
    <button :disabled="isDisabled">Clickme</button>
    <div v-for="(value, key, index) in myObject" :key="key">
      {{ index }} {{ key }}: {{ value }}
    </div>
  </OnyxPageLayout>
</template>

<style></style>
