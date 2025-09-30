<script setup>
import { ref } from 'vue';

const props = defineProps(['apiUrl', 'perPage']);

const items = ref([]);

// mock remote data fetching
setTimeout(() => {
  if (props.apiUrl?.includes('timetable')) {
    items.value = [
      { body: 'Scoped Slots Guide', description: 'Evan You', value: 20 },
      { body: 'Vue Tutorial', description: 'Natalia Tepluhina', value: 10 },
    ];
  } else {
    items.value = [
      { body: 'Pizza', description: 'Salami', value: 10 },
      { body: 'Burger', description: 'Greek Style', value: 15 },
      { body: 'Pasta', description: 'Spaghetti', value: 15 },
    ];
  }
}, 1000);
</script>

<template>
  <ul>
    <li v-if="!items.length">Loading...</li>
    <li v-for="item in items" :key="item.body">
      <slot name="item" v-bind="item" />
    </li>
  </ul>
</template>

<style scoped>
ul {
  list-style-type: none;
  padding: 5px;
  background: linear-gradient(315deg, #42d392 25%, #647eff);
}
li {
  padding: 5px 20px;
  margin: 10px;
  background: #fff;
}
</style>
