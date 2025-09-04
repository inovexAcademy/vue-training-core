<script lang="ts" setup>
import { defineProps } from 'vue';
import { type Dish } from './DishesList.vue';

const props = defineProps<{
  dish: Dish;
}>();

const emit = defineEmits<{
  (event: 'make-spicy', dish: Dish): void;
}>();
</script>

<template>
  <section class="dish-card">
    <div class="dish">
      <p class="name">{{ props.dish.name }}</p>
      <p class="price">Price: {{ props.dish.price }} $</p>
      <button class="make-spicy" @click="emit('make-spicy', dish)">
        Make Spicy
      </button>
    </div>
    <div class="image">
      <img :src="props.dish.imageUrl" alt="Dish" height="80px" />
      <img
        v-if="props.dish.isSpicy"
        class="spicy-icon"
        src="@/assets/spicy.png"
        alt="Hot and Spicy"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
.dish-card {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  .dish {
    .name {
      font-weight: bold;
    }

    .price {
      color: gray;
      font-size: 0.9em;
    }

    .make-spicy {
      background-color: #d6633d;
      color: white;
      border: none;
      padding: 4px 10px;
      border-radius: 4px;
      cursor: pointer;
      margin-top: 8px;

      &:hover {
        background-color: #a04f1d;
      }
    }
  }

  .image {
    position: relative;
    height: 80px;
    width: 80px;

    img {
      width: 100%;
      height: 100%;
      border-radius: 6px;
      object-fit: cover;
    }

    .spicy-icon {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      position: absolute;
      bottom: -12px;
      right: -14px;
    }
  }
}
</style>
