<script setup lang="ts">
import { iconPlus } from '@sit-onyx/icons';
import { OnyxButton, OnyxCard, OnyxHeadline } from 'sit-onyx';
</script>

<template>
  <OnyxCard>
    <OnyxHeadline is="h3">Available Products</OnyxHeadline>
    <p>A delicious fruit</p>
    <p>Price: 29,99 $</p>
    <!-- ^-- All information above should be dynamic -->
    <OnyxButton label="Add to cart" :icon="iconPlus"></OnyxButton>
    <!-- ^-- Should tell parents to add a product to the cart -->
  </OnyxCard>
</template>

<style scoped lang="css"></style>
