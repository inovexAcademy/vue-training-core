<template>
  <OnyxPageLayout>
    <OnyxInfoCard color="danger">
      <OnyxHeadline is="h1" class="title">Product Not Found</OnyxHeadline>
      <p>This is not the product you are looking for.</p>
      <OnyxLink href="/">Go home</OnyxLink>
    </OnyxInfoCard>
  </OnyxPageLayout>
</template>

<script lang="ts" setup>
import { OnyxHeadline, OnyxInfoCard, OnyxLink, OnyxPageLayout } from 'sit-onyx';
</script>
