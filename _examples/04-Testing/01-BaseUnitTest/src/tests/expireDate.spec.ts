import { expect, test } from 'vitest';
import { isExpired, type Fruit } from '../helpers/expiryDate';

test('verifies the best before date', () => {
  const peach: Fruit = {
    name: 'peach',
    bestBeforeDate: new Date('2030-03-18'),
  };
  expect(isExpired(peach)).not.toBe(true);
});
