<script lang="ts" setup>
import { computed, ref } from 'vue';

const quantity = ref(1);
const price = ref(10);
const total = computed(() => quantity.value * price.value);

const totalWithTax = computed(() => {
  return total.value * 1.1;
});
</script>

<template>
  <div>Quantity: {{ quantity }}</div>
  <div>Price: {{ price }} $</div>
  <div>Total: {{ total }}</div>
  <div>Total with Tax: {{ totalWithTax }}</div>

  <button @click="quantity++">Increase Quantity</button>
</template>
