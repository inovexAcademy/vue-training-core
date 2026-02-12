import { type Fruit } from '@/helpers/comparison';
import { expect, test } from 'vitest';
import { buyFruit } from '../helpers/comparison';

test('reduces stock value when bought', () => {
  const apple: Fruit = { name: 'apple', inStock: 43 };
  expect(buyFruit(apple)).toEqual({ name: 'apple', inStock: 42 });
});

// ❌ This test will fail because the toBe matcher checks for referential equality, not deep equality.
// The buyFruit function returns a new object, so it will not be the same reference as the expected object, even though their contents are the same.
test.fails('does not work: reduces stock value when bought', () => {
  const apple: Fruit = { name: 'apple', inStock: 43 };
  expect(buyFruit(apple)).toBe({ name: 'apple', inStock: 42 }); // false
});
