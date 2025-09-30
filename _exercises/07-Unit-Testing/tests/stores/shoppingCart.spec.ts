import { createPinia, setActivePinia } from 'pinia';
import { beforeEach, describe } from 'vitest';

describe('shoppingCart store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  // [...]
});
