import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { CurrencyRate } from '@/api/types/currency';
import { DEFAULT_CURRENCY_CODE, DEFAULT_TARGET_CURRENCY_CODE } from '@/constants';
import { formatMoney } from '@/utils/money.utils';

export const useCurrencyStore = defineStore(
  'currency',
  () => {
    const rates = ref<CurrencyRate[] | null>(null);
    const effectiveDate = ref<string | null>(null);
    const sourceCurrency = ref(DEFAULT_CURRENCY_CODE);
    const targetCurrency = ref(DEFAULT_TARGET_CURRENCY_CODE);
    const sourceAmount = ref(0);

    const ratesAvailable = computed(() => {
      return rates.value !== null;
    });

    const getRateForCurrency = computed(() => (currencyCode: string) => {
      if (currencyCode === DEFAULT_CURRENCY_CODE) {
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

      if (sourceCurrency.value === DEFAULT_CURRENCY_CODE) {
        return formatMoney(1 / toRate);
      }

      if (targetCurrency.value === DEFAULT_CURRENCY_CODE) {
        return formatMoney(1 * fromRate);
      }

      // Cross-rate
      const amountInBaseCurrency = 1 * fromRate;
      return formatMoney(amountInBaseCurrency / toRate);
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

      if (sourceCurrency.value === DEFAULT_CURRENCY_CODE) {
        return formatMoney(sourceAmount.value / toRate);
      }

      if (targetCurrency.value === DEFAULT_CURRENCY_CODE) {
        return formatMoney(sourceAmount.value * fromRate);
      }

      // Cross-rate
      const amountInBaseCurrency = sourceAmount.value * fromRate;
      return formatMoney(amountInBaseCurrency / toRate);
    });

    function switchCurrencies() {
      const temp = sourceCurrency.value;
      sourceCurrency.value = targetCurrency.value;
      targetCurrency.value = temp;
    }

    return {
      rates,
      ratesAvailable,
      effectiveDate,
      sourceCurrency,
      targetCurrency,
      sourceAmount,
      currencyCodes,
      currencyCodeOptions,
      sourceExchangeRate,
      getRateForCurrency,
      convertedAmount,
      switchCurrencies,
    };
  },
  {
    persist: true,
  },
);
