<script lang="ts" setup>
import { useColorMode } from '@vueuse/core';
import { OnyxAppLayout, useThemeTransition } from 'sit-onyx';
import ExerciseBanner from '../../../../shared/ExerciseBanner.vue';
import HomeView from './views/HomeView.vue';

const { store: colorScheme } = useColorMode({ disableTransition: false });
useThemeTransition(colorScheme);
</script>

<template>
  <OnyxAppLayout class="onyx-grid-max-md onyx-grid-center">
    <ExerciseBanner
      :number="3"
      title="Reactivity - Computed Properties (Solution)"
    />
    <HomeView />
  </OnyxAppLayout>
</template>
