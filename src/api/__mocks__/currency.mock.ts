import type { CurrencyResponse } from '../types';

export const mockCurrencyResponse: CurrencyResponse = {
  table: 'A',
  no: '123/A/NBP/2024',
  effectiveDate: '2024-01-14',
  rates: [
    { currency: 'Euro', code: 'EUR', mid: 4.266 },
    { currency: 'US Dollar', code: 'USD', mid: 4.142 },
    { currency: 'British Pound', code: 'GBP', mid: 5.053 },
    { currency: 'Swiss Franc', code: 'CHF', mid: 4.539 },
  ],
};

export const mockErrorResponse = {
  status: 404,
  message: 'Not Found',
};
