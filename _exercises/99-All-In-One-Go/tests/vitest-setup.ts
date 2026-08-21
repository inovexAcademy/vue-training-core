import { vi } from 'vitest';
import { mock } from 'vitest-mock-extended';

/** Global mock for ResizeObserver, which jsdom does not provide. */
window.ResizeObserver = vi
  .fn()
  .mockReturnValue(mock<typeof window.ResizeObserver>());
