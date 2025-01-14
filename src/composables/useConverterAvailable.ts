import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useCurrencyStore } from '@/stores/currency';
import { useCurrencyConverter } from './useCurrencyConverter';

export function useConverterAvailable() {
  const currencyStore = useCurrencyStore();
  const { fetchError } = useCurrencyConverter();

  const { ratesAvailable } = storeToRefs(currencyStore);

  const showConverter = computed(() => {
    return ratesAvailable.value;
  });

  const applyOfflineRates = computed(() => {
    return fetchError.value && ratesAvailable.value;
  });

  return { applyOfflineRates, showConverter };
}
