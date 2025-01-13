<script setup lang="ts">
import { useCurrencyStore } from '@/stores/currency';
import { storeToRefs } from 'pinia';
import TheInput from './forms/TheInput.vue';
import TheSelect from './forms/TheSelect.vue';
import TheDivider from './common/TheDivider.vue';
import ConverterDetails from './ConverterDetails.vue';
import ConverterSwitchButton from './ConverterSwitchButton.vue';

const currencyStore = useCurrencyStore();

const { currencyCodeOptions, sourceCurrency, sourceAmount, targetCurrency, convertedAmount } =
  storeToRefs(currencyStore);

const { switchCurrencies } = currencyStore;
</script>

<template>
  <div class="bg-white rounded-lg p-4 w-full flex flex-col items-center justify-center">
    <div class="flex gap-4">
      <TheSelect v-model="sourceCurrency" :options="currencyCodeOptions" />
      <TheInput v-model="sourceAmount" type="number" />
    </div>
    <div class="relative w-full my-10">
      <TheDivider />
      <ConverterSwitchButton @click="switchCurrencies" />
    </div>
    <div class="flex gap-4">
      <TheSelect v-model="targetCurrency" :options="currencyCodeOptions" />
      <TheInput v-model="convertedAmount" type="number" disabled />
    </div>
  </div>
  <ConverterDetails class="mt-10" />
</template>

<style scoped></style>
