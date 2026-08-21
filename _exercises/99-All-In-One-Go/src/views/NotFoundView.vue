<script setup lang="ts">
import { OnyxHeadline, OnyxInfoCard, OnyxLink, OnyxPageLayout } from 'sit-onyx';
</script>

<template>
  <OnyxPageLayout>
    <OnyxInfoCard color="danger">
      <OnyxHeadline is="h1">Product Not Found</OnyxHeadline>
      <p>This is not the product you are looking for.</p>
      <OnyxLink href="/">Go home</OnyxLink>
    </OnyxInfoCard>
  </OnyxPageLayout>
</template>
