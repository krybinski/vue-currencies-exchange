import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { currencyApi } from '@/api/services/currency.service';
import type { CurrencyResponse } from '@/api/types/currency';
import { DEFAULT_CURRENCY_RATE } from '@/constants';
import { useCurrencyStore } from '@/stores/currency';
import { useFetch } from './useFetch';

export function useHistorical() {
  const currencyStore = useCurrencyStore();
  const { rates } = storeToRefs(currencyStore);

  const { data, fetchError, loading, fetchHandler } = useFetch<CurrencyResponse>();

  const historicalDate = ref<Date>(new Date());

  async function fetchRatesByDate(date: string) {
    await fetchHandler(() => currencyApi.getCurrentRatesByDate(date));

    if (data.value) {
      rates.value = [...data.value.rates, DEFAULT_CURRENCY_RATE];
    }
  }

  function changeDate(date: Date) {
    const formattedDate = date.toISOString().split('T')[0];

    fetchRatesByDate(formattedDate);
  }

  function disabledAfterToday(date: Date) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return date > today;
  }

  return {
    historicalDate,
    fetchError,
    loading,
    disabledAfterToday,
    changeDate,
  };
}
