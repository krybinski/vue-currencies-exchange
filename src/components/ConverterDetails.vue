<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCurrencyStore } from '@/stores/currency';
import HistoricalInput from './HistoricalInput.vue';

const currencyStore = useCurrencyStore();
const { sourceCurrency, targetCurrency, sourceExchangeRate } = storeToRefs(currencyStore);
</script>

<template>
  <div class="text-center">
    <div class="text-sm text-gray-600">Exchange Rate</div>
    <div class="font-bold">
      1 {{ sourceCurrency }} = {{ sourceExchangeRate }} {{ targetCurrency }}
    </div>
    <div class="text-sm text-gray-600 mt-4">
      <span>Effective Date</span>
    </div>
    <div class="w-44 mx-auto">
      <HistoricalInput />
    </div>
  </div>
</template>

<style scoped></style>
