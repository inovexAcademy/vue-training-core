import { multiply } from '@/calc-helper';
import { describe, test, expect } from 'vitest';

describe('calc-helper', () => {
  test('multiplies 2 with 3 to equal 6', () => {
    expect(multiply(2, 3)).toBe(6);
  });

  test('returns 0 when one of the arguments is 0', () => {
    expect(multiply(0, 5)).toBe(0);
    expect(multiply(5, 0)).toBe(0);
  });

  test('handles negative numbers correctly', () => {
    expect(multiply(-2, 3)).toBe(-6);
    expect(multiply(2, -3)).toBe(-6);
    expect(multiply(-2, -3)).toBe(6);
  });
});
