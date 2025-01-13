<script setup lang="ts">
import { useCurrencyConverter } from '@/composables/useCurrencyConverter';
import { useCurrencyStore } from '@/stores/currency';
import { storeToRefs } from 'pinia';

useCurrencyConverter();

const currencyStore = useCurrencyStore();
const { effectiveDate, sourceCurrency, targetCurrency, sourceExchangeRate } =
  storeToRefs(currencyStore);
</script>

<template>
  <div class="text-center">
    <div class="text-sm text-gray-600">Exchange Rate</div>
    <div class="font-bold">
      1 {{ sourceCurrency }} = {{ sourceExchangeRate }} {{ targetCurrency }}
    </div>
    <div class="text-sm text-gray-600 mt-4">Effective Date</div>
    <div class="font-bold">{{ effectiveDate }}</div>
  </div>
</template>

<style scoped></style>
