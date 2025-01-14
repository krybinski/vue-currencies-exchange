import { describe, it, expect, beforeEach, vi } from 'vitest';
import { mockCurrencyResponse } from '../__mocks__/currency.mock';
import { apiClient } from '../client';
import { currencyApi } from './currency.service';

vi.mock('../client', () => ({
  apiClient: {
    get: vi.fn(),
  },
}));

describe('CurrencyApiService', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('getCurrentRates', () => {
    it('should fetch current rates successfully', async () => {
      const mockApiResponse = { data: [mockCurrencyResponse] };
      vi.mocked(apiClient.get).mockResolvedValueOnce(mockApiResponse);

      const result = await currencyApi.getCurrentRates();

      expect(result).toEqual(mockCurrencyResponse);
      expect(apiClient.get).toHaveBeenCalledTimes(1);
      expect(apiClient.get).toHaveBeenCalledWith('/exchangerates/tables/A/');
    });

    it('should handle API error', async () => {
      const errorMessage = 'Network Error';
      vi.mocked(apiClient.get).mockRejectedValueOnce(new Error(errorMessage));

      await expect(currencyApi.getCurrentRates()).rejects.toThrow(errorMessage);
      expect(apiClient.get).toHaveBeenCalledTimes(1);
    });
  });

  describe('getCurrentRatesByDate', () => {
    it('should fetch rates with valid date successfully', async () => {
      const date = '2024-03-20';
      const mockApiResponse = { data: [mockCurrencyResponse] };
      vi.mocked(apiClient.get).mockResolvedValueOnce(mockApiResponse);

      const result = await currencyApi.getCurrentRatesByDate(date);

      expect(result).toEqual(mockCurrencyResponse);
      expect(apiClient.get).toHaveBeenCalledTimes(1);
      expect(apiClient.get).toHaveBeenCalledWith(`/exchangerates/tables/A/${date}`);
    });

    it('should handle API error for date based request', async () => {
      const date = '2024-03-20';
      const errorMessage = 'Not Found';
      vi.mocked(apiClient.get).mockRejectedValueOnce(new Error(errorMessage));

      await expect(currencyApi.getCurrentRatesByDate(date)).rejects.toThrow(errorMessage);
      expect(apiClient.get).toHaveBeenCalledTimes(1);
    });
  });
});
