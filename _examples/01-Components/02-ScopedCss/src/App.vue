<script setup lang="ts">
import Contacts from './components/VContacts.vue';
import ContactsScoped from './components/VContactsScoped.vue';
import ContactsScopedDeep from './components/VContactsScopedDeep.vue';
</script>

<template>
  <h1>Contact List</h1>
  <Contacts />

  <ContactsScoped />

  <ContactsScopedDeep />
</template>

<style scoped>
h1 {
  color: blue;
}

/* does not work */
.contacts-deep .headline {
  color: red;
}

/* works */
.contacts-deep :deep(.headline) {
  color: red;
}
</style>
