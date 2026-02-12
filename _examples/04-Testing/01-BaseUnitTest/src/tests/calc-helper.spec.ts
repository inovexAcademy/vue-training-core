import { multiply } from '@/calc-helper';
import { describe, expect, test } from 'vitest';

describe('calc-helper', () => {
  test('multiplies 2 with 3 to equal 6', () => {
    expect(multiply(2, 3)).toEqual(6);
  });

  test('returns 0 when one of the arguments is 0', () => {
    expect(multiply(0, 5)).toEqual(0);
    expect(multiply(5, 0)).toEqual(0);
  });

  test('handles negative numbers correctly', () => {
    expect(multiply(-2, 3)).toEqual(-6);
    expect(multiply(2, -3)).toEqual(-6);
    expect(multiply(-2, -3)).toEqual(6);
  });
});
