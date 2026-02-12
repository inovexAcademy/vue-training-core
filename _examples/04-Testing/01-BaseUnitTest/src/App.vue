<script lang="ts" setup>
import { multiply } from './helpers/calc-helper';

const result = multiply(2, 3);
</script>

<template>
  <h1>Calculator App</h1>
  <p>2 * 3 = {{ result }}</p>
</template>
