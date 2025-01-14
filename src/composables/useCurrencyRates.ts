import { storeToRefs } from 'pinia';
import { currencyApi } from '@/api/services/currency.service';
import type { CurrencyResponse } from '@/api/types/currency';
import { DEFAULT_CURRENCY_RATE } from '@/constants';
import { useCurrencyStore } from '@/stores/currency';
import { useFetch } from './useFetch';

export function useCurrencyRates() {
  const currencyStore = useCurrencyStore();
  const { rates } = storeToRefs(currencyStore);

  const { data, fetchError, loading, fetchHandler } = useFetch<CurrencyResponse>();

  const fetchRates = async () => {
    await fetchHandler(() => currencyApi.getCurrentRates());

    if (data.value) {
      rates.value = [...data.value.rates, DEFAULT_CURRENCY_RATE];
    }
  };

  return {
    fetchError,
    loading,
    fetchRates,
  };
}
