import { calcDiscountedPrice } from "@/utils/calc-helper";
import { describe, expect, it } from "vitest";

describe('calc-helpers', () => {
  describe('calcDiscountedPrice', () => {
    it('should return discounted price', () => {
      const testCases = [
        { price :0, discount: 0, expected: 0 },
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