import { onMounted, ref } from 'vue';
import { currencyApi } from '@/api/services/currency';
import { useCurrencyStore } from '@/stores/currency';
import { storeToRefs } from 'pinia';

export function useCurrencyConverter() {
  const currencyStore = useCurrencyStore();
  const { rates, effectiveDate } = storeToRefs(currencyStore);

  async function fetchRates() {
    try {
      const data = await currencyApi.getCurrentRates();
      rates.value = [...data.rates, { currency: 'PLN (Polska)', code: 'PLN', mid: 1 }];
      effectiveDate.value = data.effectiveDate;
    } catch (error) {
      console.error(error);
    }
  }

  onMounted(async () => {
    await fetchRates();
  });
}
