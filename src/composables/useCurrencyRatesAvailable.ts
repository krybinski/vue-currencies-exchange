import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useCurrencyStore } from '@/stores/currency';
import { useCurrencyRates } from './useCurrencyRates';

export function useCurrencyRatesAvailable() {
  const currencyStore = useCurrencyStore();
  const { fetchError } = useCurrencyRates();

  const { ratesAvailable } = storeToRefs(currencyStore);

  const showConverter = computed(() => {
    return ratesAvailable.value;
  });

  const applyOfflineRates = computed(() => {
    return fetchError.value && ratesAvailable.value;
  });

  return { applyOfflineRates, showConverter };
}
