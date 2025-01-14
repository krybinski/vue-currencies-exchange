import { setActivePinia } from 'pinia';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { mockCurrencyResponse } from '@/api/__mocks__/currency.mock';
import { currencyApi } from '@/api/services/currency.service';
import { DEFAULT_CURRENCY_RATE } from '@/constants';
import { useCurrencyStore } from '@/stores/currency';
import { createTestingPinia } from '@pinia/testing';
import { useCurrencyRates } from './useCurrencyRates';

vi.mock('@/api/services/currency.service', () => ({
  currencyApi: {
    getCurrentRates: vi.fn(),
  },
}));

describe('useCurrencyRates', () => {
  beforeEach(() => {
    setActivePinia(
      createTestingPinia({
        createSpy: vi.fn,
        initialState: {
          currency: {
            rates: null,
          },
        },
      }),
    );
    vi.clearAllMocks();
  });

  it('should initialize with correct default values', () => {
    const { loading, fetchError } = useCurrencyRates();

    expect(loading.value).toBe(false);
    expect(fetchError.value).toBeNull();
  });

  it('should fetch rates successfully and update store', async () => {
    vi.mocked(currencyApi.getCurrentRates).mockResolvedValueOnce(mockCurrencyResponse);

    const store = useCurrencyStore();
    const { fetchRates, loading, fetchError } = useCurrencyRates();

    await fetchRates();

    expect(currencyApi.getCurrentRates).toHaveBeenCalledTimes(1);
    expect(loading.value).toBe(false);
    expect(fetchError.value).toBeNull();
    expect(store.rates).toEqual([...mockCurrencyResponse.rates, DEFAULT_CURRENCY_RATE]);
  });
});
