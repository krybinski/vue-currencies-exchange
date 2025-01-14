import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { currencyApi } from '@/api/services/currency.service';
import { DEFAULT_CURRENCY_RATE } from '@/constants';
import { useCurrencyStore } from '@/stores/currency';
import { getErrorMessage } from '@/utils/http.utils';

export function useCurrencyRates() {
  const currencyStore = useCurrencyStore();
  const { rates, effectiveDate } = storeToRefs(currencyStore);
  const fetchError = ref<string | null>(null);
  const isLoading = ref(false);

  async function fetchRates() {
    try {
      fetchError.value = null;
      isLoading.value = true;

      const data = await currencyApi.getCurrentRates();

      rates.value = [...data.rates, DEFAULT_CURRENCY_RATE];
      effectiveDate.value = data.effectiveDate;
    } catch (e: unknown) {
      fetchError.value = getErrorMessage(e);
    } finally {
      isLoading.value = false;
    }
  }

  return {
    fetchError,
    isLoading,
    fetchRates,
  };
}
