<script setup lang="ts">
import { computed, ref } from 'vue';

// state keeps those field separate
const firstName = ref('John');
const lastName = ref('Doe');

// but ui wants to show them together
const fullName = computed({
  get() {
    if (!lastName.value) {
      return firstName.value;
    }
    return `${firstName.value} ${lastName.value}`;
  },
  set(value: string) {
    if (!value || value === '' || value === ' ') {
      firstName.value = '';
      lastName.value = '';
      return;
    } else if (!value.includes(' ')) {
      firstName.value = value;
      return;
    }
    const [first, last] = value.split(' ');
    firstName.value = first;
    lastName.value = last;
  },
});
</script>

<template>
  <input v-model="fullName" />

  <div>
    firstName: {{ firstName }} <br />
    lastName: {{ lastName }}
  </div>
</template>
