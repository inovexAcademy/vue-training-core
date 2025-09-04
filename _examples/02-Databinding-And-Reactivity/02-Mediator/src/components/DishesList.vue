<script lang="ts" setup>
import { ref } from 'vue';
import DishCard from './DishCard.vue';
import DishesSummary from './DishesSummary.vue';

export type Dish = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  isSpicy?: boolean;
};

const DISHES: Dish[] = [
  {
    id: 1,
    name: 'Wings',
    price: 18,
    imageUrl: import.meta.resolve('../assets/dish1.avif'),
  },
  {
    id: 2,
    name: 'Ramen',
    price: 24,
    imageUrl: import.meta.resolve('../assets/dish2.avif'),
  },
  {
    id: 3,
    name: 'Salmon Bowl',
    price: 28,
    imageUrl: import.meta.resolve('../assets/dish3.avif'),
  },
  {
    id: 4,
    name: 'Burrata Bowl',
    price: 16,
    imageUrl: import.meta.resolve('../assets/dish4.avif'),
  },
];

const dishes = ref<Dish[]>(DISHES);

const handleMakeSpicy = (dish: Dish) => {
  const matchedDish = dishes.value.find(d => d.id === dish.id);
  if (matchedDish) {
    matchedDish.isSpicy = true;
  }
};
</script>

<template>
  <h1 class="title">Dishes</h1>

  <div class="dishes">
    <div class="list">
      <DishCard
        v-for="dish in dishes"
        :key="dish.id"
        class="dish-card"
        :dish="dish"
        @make-spicy="handleMakeSpicy"
      />
    </div>

    <DishesSummary :dishes="dishes" />
  </div>
</template>

<style scoped lang="scss">
.title {
  font-size: 24px;
  margin-bottom: 16px;
}

.dishes {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 24px;

  .list {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .dish-card {
    margin-bottom: 16px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
