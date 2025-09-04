<script lang="ts" setup>
import { useColorMode } from '@vueuse/core';
import { OnyxAppLayout, OnyxToast, useThemeTransition } from 'sit-onyx';

const { store: colorScheme } = useColorMode({ disableTransition: false });
useThemeTransition(colorScheme);
</script>

<template>
  <OnyxAppLayout class="onyx-grid-max-md onyx-grid-center">
    <RouterView />
    <OnyxToast />
  </OnyxAppLayout>
</template>
