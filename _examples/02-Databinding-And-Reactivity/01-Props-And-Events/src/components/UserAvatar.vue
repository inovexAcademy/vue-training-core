<script lang="ts" setup>
const props = defineProps<{
  imageUrl: string;
  age: number;
  isVerified?: boolean;
}>();

const emit = defineEmits<{
  (event: 'verify'): void;
}>();
</script>

<template>
  <section class="avatar">
    <div class="user">
      <p class="name">User Avatar</p>
      <p class="age">Age: {{ props.age }}</p>
      <button class="verify-button" @click="emit('verify')">Verify User</button>
    </div>
    <div class="image">
      <img :src="props.imageUrl" alt="User avatar" width="50" height="50" />
      <img
        v-if="props.isVerified"
        class="verified-badge"
        src="@/assets/verified-badge.png"
        alt="Verified user"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
.avatar {
  position: relative;
  display: flex;
  align-items: center;
  gap: 16px;

  .user {
    .name {
      font-weight: bold;
    }

    .age {
      color: gray;
      font-size: 0.9em;
    }

    .verify-button {
      background-color: #4caf50;
      color: white;
      border: none;
      padding: 4px 10px;
      border-radius: 4px;
      cursor: pointer;
      margin-top: 8px;

      &:hover {
        background-color: #45a049;
      }
    }
  }

  .image {
    img {
      border-radius: 50%;
      width: 50px;
      height: 50px;
    }

    .verified-badge {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      position: absolute;
      bottom: 2px;
      right: -8px;
    }
  }
}
</style>
