<script lang="ts" setup>
import { useColorMode } from '@vueuse/core';
import { OnyxAppLayout, useThemeTransition } from 'sit-onyx';
import ExerciseBanner from '../../../shared/ExerciseBanner.vue';

const { store: colorScheme } = useColorMode({ disableTransition: false });
useThemeTransition(colorScheme);
</script>

<template>
  <OnyxAppLayout class="onyx-grid-max-md onyx-grid-center">
    <ExerciseBanner number="8" title="Your Turn" />
    <RouterView />
  </OnyxAppLayout>
</template>
