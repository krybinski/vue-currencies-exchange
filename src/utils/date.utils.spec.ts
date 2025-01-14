import { describe, it, expect } from 'vitest';
import { isValidDateFormat } from './date.utils';

describe('isValidDateFormat', () => {
  it('should return true for valid date format', () => {
    expect(isValidDateFormat('2024-1-01')).toBe(true);
  });
});
