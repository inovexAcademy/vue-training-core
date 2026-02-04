<script lang="ts" setup>
const props = defineProps<{
  name: string;
  durationInH: number;
}>();
</script>

<template>
  <div class="course">
    <h2 class="course-name">{{ props.name }}</h2>
    <p class="course-duration">Duration: {{ props.durationInH }} hours</p>
  </div>
</template>

<style scoped lang="scss">
.course {
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 8px;
  max-width: 300px;
  margin: 1rem auto;
  text-align: center;
  background-color: #f9f9f9;

  .course-name {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: #42b983;
  }

  .course-duration {
    font-size: 1rem;
    color: #666;
  }
}
</style>
