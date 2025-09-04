<script lang="ts" setup>
import { nextTick, ref, shallowRef } from 'vue';

// Nooby
const files = ref([]);
const shallowFiles = shallowRef([]);

const newFilesIncoming = async newFiles => {
  // user drops files
  for (const newFile of newFiles) {
    if (newFile.a === 'File 20') {
      console.warn('💥 BREAKING CHANGE AHEAD 💥');
      files.value = [...files.value, { ...newFile, a: 'important change!' }];
    }
    files.value.push(newFile); // mutating
    console.debug('🔥 newFile', newFile);

    // await nextTick(); // this is only for demonstrating. Vue is already optimized for this kind of scenario and only does one render
    // -> 5x files push
    // files change 5x
    // => 5x rerender
  }
};

const newFilesIncomingShallow = async (newFiles: { a: string }[]) => {
  shallowFiles.value = newFiles.toSpliced(19, 1, { a: 'important change!' });
};

const updateItem = (index: number, newItem: { a: string }) => {
  console.debug('🔥 index', index);
  shallowFiles.value = shallowFiles.value.map((file, i) =>
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
  <ul>
    <li v-for="file of files" :key="file.a">
      {{ file.a }}
    </li>
  </ul>

  <!-- Shallow files -->
  <ul>
    <li v-for="file of shallowFiles" :key="file.a">
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
