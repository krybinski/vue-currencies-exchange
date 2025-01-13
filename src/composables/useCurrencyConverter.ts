import { onMounted, ref } from 'vue';
import { currencyApi } from '@/api/services/currency';
import { useCurrencyStore } from '@/stores/currency';
import { storeToRefs } from 'pinia';
import { getErrorMessage } from '@/utils/http.utils';
import { DEFAULT_CURRENCY_RATE } from '@/constants';

export function useCurrencyConverter() {
  const currencyStore = useCurrencyStore();
  const { rates, effectiveDate } = storeToRefs(currencyStore);
  const fetchError = ref<string | null>('');
  const isLoading = ref(false);

  async function fetchRates() {
    try {
      fetchError.value = '';
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

  onMounted(fetchRates);

  return {
    fetchError,
    isLoading,
  };
}
