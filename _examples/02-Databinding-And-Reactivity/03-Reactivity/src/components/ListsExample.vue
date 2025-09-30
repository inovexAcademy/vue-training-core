<!-- This example demonstrates the difference between deep and shallow reactivity in Vue 3 -->
<!-- By rendering a list of many files, and then updating them after a timeout, we can inspect the number of re-renders triggered by each approach -->
<!-- We can see that vue is already optimized resulting in the same behavior
  for updating entries in the list by updating
  - the whole list (immutability approach)
  - or just updating the specific item (mutability approach) -->

<script lang="ts" setup>
import { nextTick, ref, shallowRef } from 'vue';

const filesDeep = ref([]);
const filesShallow = shallowRef([]);

const newFilesIncomingDeep = async newFiles => {
  // user drops files
  for (const newFile of newFiles) {
    if (newFile.a === 'File 20') {
      console.warn('💥 BREAKING CHANGE AHEAD 💥');
      filesDeep.value = [
        ...filesDeep.value,
        { ...newFile, a: 'important change!' },
      ];
    }
    filesDeep.value.push(newFile); // mutating
    console.debug('🔥 newFile', newFile);

    // await nextTick(); // this is only for demonstrating. Vue is already optimized for this kind of scenario and only does one render
    // -> 5x files push
    // files change 5x
    // => 5x rerender
  }
};

const newFilesIncomingShallow = async (newFiles: { a: string }[]) => {
  filesShallow.value = newFiles.toSpliced(19, 1, { a: 'important change!' });
};

const updateItem = (index: number, newItem: { a: string }) => {
  console.debug('🔥 index', index);
  filesShallow.value = filesShallow.value.map((file, i) =>
    i === index ? newItem : file,
  );
};

setTimeout(() => {
  const largeList = Array.from({ length: 1000 }, (_, i) => ({
    a: `File ${i}`,
  }));
  // newFilesIncoming(largeList);
  newFilesIncomingShallow(largeList);
}, 2500);
</script>

<template>
  <!-- Deep watched files -->
  <ul>
    <li v-for="file of filesDeep" :key="file.a">
      {{ file.a }}
    </li>
  </ul>

  <!-- Shallow watched files -->
  <ul>
    <li v-for="file of filesShallow" :key="file.a">
      {{ file.a }}
    </li>
  </ul>

  <button
    @click="
      updateItem(Math.round(Math.random() * 1000), { a: 'File updated!' })
    "
  >
    Update Random File
  </button>
  <button @click="updateItem(980, { a: 'File 980 updated!' })">
    Update File 980
  </button>
</template>
