<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { defineAsyncComponent } from 'vue';
import { useCurrencyStore } from '@/stores/currency';

const CurrencyHistoricalInput = defineAsyncComponent(() => import('./CurrencyHistoricalInput.vue'));

const currencyStore = useCurrencyStore();
const { sourceCurrency, targetCurrency, sourceExchangeRate } = storeToRefs(currencyStore);
</script>

<template>
  <div class="text-center">
    <div class="text-sm text-gray-600">Exchange Rate</div>
    <div class="font-bold">
      1 {{ sourceCurrency }} = {{ sourceExchangeRate }} {{ targetCurrency }}
    </div>
    <div class="mt-4 text-sm text-gray-600">
      <span>Effective Date</span>
    </div>
    <div class="mx-auto w-44">
      <CurrencyHistoricalInput />
    </div>
  </div>
</template>

<style scoped></style>
