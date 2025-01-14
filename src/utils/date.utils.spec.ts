import { describe, it, expect } from 'vitest';
import { isValidDateFormat } from './date.utils';

describe('isValidDateFormat', () => {
  it('should return true for valid date format', () => {
    expect(isValidDateFormat('2024-01-01')).toBe(true);
  });

  it('should return false for invalid date format', () => {
    expect(isValidDateFormat('2024-1-01')).toBe(false);
    expect(isValidDateFormat('2024-01-1')).toBe(false);
    expect(isValidDateFormat('2024-1-1')).toBe(false);
    expect(isValidDateFormat('2024-01')).toBe(false);
    expect(isValidDateFormat('2024')).toBe(false);
    expect(isValidDateFormat(new Date().toISOString())).toBe(false);
  });
});
