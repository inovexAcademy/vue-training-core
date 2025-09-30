<script lang="ts" setup>
import Course from './components/VCourse.vue';

const course: { name: string; durationInH: number } = {
  name: 'Vue.js Core',
  durationInH: 14,
};
</script>

<template>
  <Course :name="course.name" :duration-in-h="course.durationInH" />
</template>
