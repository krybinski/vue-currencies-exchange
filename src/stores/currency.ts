import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import type { CurrencyRate } from '@/api/types/currency';

export const useCurrencyStore = defineStore('currency', () => {
  const rates = ref<CurrencyRate[] | null>(null);
  const effectiveDate = ref<string | null>(null);
  const sourceCurrency = ref('PLN');
  const targetCurrency = ref('EUR');
  const sourceAmount = ref(0);

  const getRateForCurrency = computed(() => (currencyCode: string) => {
    if (currencyCode === 'PLN') {
      return 1;
    }

    return rates.value?.find((rate) => rate.code === currencyCode)?.mid || 0;
  });

  const currencyCodes = computed(() => {
    return (rates.value?.map((rate) => rate.code) || []).sort((a, b) => a.localeCompare(b)) || [];
  });

  const currencyCodeOptions = computed(() => {
    return currencyCodes.value.map((code) => ({ label: code, value: code }));
  });

  const isSameCurrency = computed(() => {
    return sourceCurrency.value === targetCurrency.value;
  });

  const sourceExchangeRate = computed(() => {
    if (isSameCurrency.value) {
      return 1;
    }

    const fromRate = getRateForCurrency.value(sourceCurrency.value);
    const toRate = getRateForCurrency.value(targetCurrency.value);

    if (!fromRate || !toRate) {
      return 0;
    }

    if (sourceCurrency.value === 'PLN') {
      return +(1 / toRate).toFixed(2);
    }

    if (targetCurrency.value === 'PLN') {
      return +(1 * fromRate).toFixed(2);
    }

    // Cross-rate
    const amountInBaseCurrency = 1 * fromRate;
    return +(amountInBaseCurrency / toRate).toFixed(4);
  });

  const convertedAmount = computed(() => {
    if (isSameCurrency.value) {
      return sourceAmount.value;
    }

    const fromRate = getRateForCurrency.value(sourceCurrency.value);
    const toRate = getRateForCurrency.value(targetCurrency.value);

    if (!fromRate || !toRate) {
      return 0;
    }

    if (sourceCurrency.value === 'PLN') {
      return +(sourceAmount.value / toRate).toFixed(2);
    }

    if (targetCurrency.value === 'PLN') {
      return +(sourceAmount.value * fromRate).toFixed(2);
    }

    // Cross-rate
    console.log(fromRate, toRate);
    const amountInBaseCurrency = sourceAmount.value * fromRate;
    return +(amountInBaseCurrency / toRate).toFixed(2);
  });

  return {
    rates,
    effectiveDate,
    sourceCurrency,
    targetCurrency,
    sourceAmount,
    currencyCodes,
    currencyCodeOptions,
    sourceExchangeRate,
    getRateForCurrency,
    convertedAmount,
  };
});
