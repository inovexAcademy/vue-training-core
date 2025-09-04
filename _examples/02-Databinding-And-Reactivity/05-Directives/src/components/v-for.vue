<script lang="ts" setup>
import { ref } from 'vue';

type Card = {
  name: '7' | '8' | '9' | '10' | 'Jack' | 'Queen' | 'King' | 'Ace';
  suit: 'Clubs' | 'Hearts' | 'Spades' | 'Diamonds';
  symbol: '♣️' | '♥️' | '♠️' | '♦️';
  value: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14;
};
const cards = ref<Card[]>([
  {
    name: 'Ace',
    suit: 'Hearts',
    symbol: '♥️',
    value: 14,
  },
  {
    name: 'Queen',
    suit: 'Clubs',
    symbol: '♣️',
    value: 12,
  },
  {
    name: '8',
    suit: 'Spades',
    symbol: '♠️',
    value: 8,
  },
  {
    name: '9',
    suit: 'Hearts',
    symbol: '♥️',
    value: 9,
  },
  {
    name: '7',
    suit: 'Clubs',
    symbol: '♣️',
    value: 7,
  },
]);
</script>

<template>
  <div class="playing-cards">
    <div v-for="card in cards" :key="card.name + card.suit" class="card">
      <div>{{ card.name }} of {{ card.symbol }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.playing-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

.card {
  width: 100px;
  height: 150px;
  border: 1px solid #000;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  margin: 10px;
}
</style>
