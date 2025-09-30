<script lang="ts" setup>
import UserAvatar from './components/UserAvatar.vue';

const handleVerify = () => {
  // api call to verify user
  alert('User verified!');
};
</script>

<template>
  <UserAvatar
    image-url="https://picsum.photos/50/50"
    :age="30"
    @verify="handleVerify"
  />
</template>
