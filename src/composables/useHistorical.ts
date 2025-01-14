import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { currencyApi } from '@/api/services/currency.service';
import { DEFAULT_CURRENCY_RATE } from '@/constants';
import { useCurrencyStore } from '@/stores/currency';
import { getErrorMessage } from '@/utils/http.utils';

export function useHistorical() {
  const currencyStore = useCurrencyStore();
  const { rates, effectiveDate } = storeToRefs(currencyStore);

  const historicalDate = ref<Date>(new Date());
  const fetchError = ref<string | null>(null);
  const isLoading = ref(false);

  async function fetchRatesByDate(date: string) {
    try {
      fetchError.value = null;
      isLoading.value = true;

      const data = await currencyApi.getCurrentRatesByDate(date);

      rates.value = [...data.rates, DEFAULT_CURRENCY_RATE];
      effectiveDate.value = data.effectiveDate;
    } catch (e: unknown) {
      fetchError.value = getErrorMessage(e);
    } finally {
      isLoading.value = false;
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
    isLoading,
    disabledAfterToday,
    changeDate,
  };
}
