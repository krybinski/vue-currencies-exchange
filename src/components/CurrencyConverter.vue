<script setup lang="ts">
import { useCurrencyConverter } from '@/composables/useCurrencyConverter';
import { useCurrencyStore } from '@/stores/currency';
import { storeToRefs } from 'pinia';
import TheInput from './forms/TheInput.vue';
import TheSelect from './forms/TheSelect.vue';
import TheDivider from './common/TheDivider.vue';
import ConverterDetails from './ConverterDetails.vue';

useCurrencyConverter();

const currencyStore = useCurrencyStore();
const { currencyCodeOptions, sourceCurrency, sourceAmount, targetCurrency, convertedAmount } =
  storeToRefs(currencyStore);
</script>

<template>
  <div class="w-full sm:w-1/2 xl:w-1/3 mx-auto">
    <div class="bg-white rounded-lg p-4 w-full flex flex-col items-center justify-center">
      <div class="flex gap-4">
        <TheSelect v-model="sourceCurrency" :options="currencyCodeOptions" />
        <TheInput v-model="sourceAmount" type="number" />
      </div>
      <TheDivider />
      <div class="flex gap-4">
        <TheSelect v-model="targetCurrency" :options="currencyCodeOptions" />
        <TheInput v-model="convertedAmount" type="number" disabled />
      </div>
    </div>
    <ConverterDetails class="mt-10" />
  </div>
</template>

<style scoped></style>
