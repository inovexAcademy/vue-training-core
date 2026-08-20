<script lang="ts" setup>
import { ref } from 'vue';
import CardRow from './card-row.vue';

type Card = {
  id: string;
  name: '7' | '8' | '9' | '10' | 'Jack' | 'Queen' | 'King' | 'Ace';
  suit: 'Clubs' | 'Hearts' | 'Spades' | 'Diamonds';
  symbol: '♣️' | '♥️' | '♠️' | '♦️';
  value: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14;
};
const cards = ref<Card[]>([
  {
    id: 'ace-hearts',
    name: 'Ace',
    suit: 'Hearts',
    symbol: '♥️',
    value: 14,
  },
  {
    id: 'queen-clubs',
    name: 'Queen',
    suit: 'Clubs',
    symbol: '♣️',
    value: 12,
  },
  {
    id: 'eight-spades',
    name: '8',
    suit: 'Spades',
    symbol: '♠️',
    value: 8,
  },
  {
    id: 'nine-hearts',
    name: '9',
    suit: 'Hearts',
    symbol: '♥️',
    value: 9,
  },
  {
    id: 'seven-clubs',
    name: '7',
    suit: 'Clubs',
    symbol: '♣️',
    value: 7,
  },
]);

const keyDemoCards = ref<Card[]>([...cards.value]);

const removeKeyDemoItem = (card: Card) => {
  keyDemoCards.value = keyDemoCards.value.filter((currentCard) => currentCard !== card);
};
</script>

<template>
  <div class="original-example">
    <div v-for="card in cards" class="card">
      <div>{{ card.name }} of {{ card.symbol }}</div>
    </div>
  </div>

  <h3 class="demo-title">Why `:key` matters</h3>
  <p class="instructions">
    Type a different note in the Queen row in both lists, then remove Ace. In the
    unkeyed list, Queen receives Ace's component instance and its note moves to
    the 8 row.
  </p>

  <div class="comparison">
    <section>
      <h3>With a key</h3>
      <div class="playing-cards">
        <CardRow
          v-for="card in keyDemoCards"
          :key="card.id"
          :card="card"
          @remove="removeKeyDemoItem(card)"
        />
      </div>
    </section>

    <section>
      <h3>Without a key</h3>
      <div class="playing-cards">
        <CardRow
          v-for="card in keyDemoCards"
          :card="card"
          @remove="removeKeyDemoItem(card)"
        />
      </div>
    </section>
    </div>
</template>

<style lang="scss" scoped>
.instructions {
  max-width: 45rem;
  margin: 0 1rem 1rem;
}

.original-example {
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: #fff;
  margin: 10px;
}

.demo-title {
  margin-top: 2rem;
  text-align: center;
}

.comparison {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;
  width: min(100%, 56rem);

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
}

.comparison h3 {
  text-align: center;
}

.playing-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}
</style>
