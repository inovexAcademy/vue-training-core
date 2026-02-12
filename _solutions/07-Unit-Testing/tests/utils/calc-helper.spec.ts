import { calcDiscountedPrice } from '@/utils/calc-helper';
import { describe, expect, test } from 'vitest';

describe('calc-helpers', () => {
  describe('calcDiscountedPrice (normal examples)', () => {
    test('should return original price when discount is 0 or negative', () => {
      expect(calcDiscountedPrice(100, 0)).toEqual(100);
      expect(calcDiscountedPrice(100, -10)).toEqual(100);
    });

    test('should return correct discounted price for positive discount', () => {
      expect(calcDiscountedPrice(200, 25)).toEqual(150);
      expect(calcDiscountedPrice(50, 10)).toEqual(45);
      expect(calcDiscountedPrice(99.99, 15)).toEqual(84.99);
    });
  });

  // Example for Table-Driven Tests
  describe('calcDiscountedPrice (Table-Driven Tests) example', () => {
    test('should return discounted price', () => {
      const testCases = [
        { price: 0, discount: 0, expected: 0 },
        { price: 100, discount: 20, expected: 80 },
        { price: 59.99, discount: 15, expected: 50.99 },
        { price: 10, discount: 0, expected: 10 },
        { price: 10, discount: -5, expected: 10 },
        { price: 49.95, discount: 33.33, expected: 33.3 },
      ];

      testCases.forEach(({ price, discount, expected }) => {
        expect(calcDiscountedPrice(price, discount)).toEqual(expected);
      });
    });
  });
});
