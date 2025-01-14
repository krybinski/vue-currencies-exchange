<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCurrencyStore } from '@/stores/currency';
import CardDivided from '../common/CardDivided.vue';
import TheInput from '../forms/TheInput.vue';
import ConverterDetails from './ConverterDetails.vue';
import ConverterSwitchButton from './ConverterSwitchButton.vue';
import CurrencySelect from './CurrencySelect.vue';

const currencyStore = useCurrencyStore();

const { sourceCurrency, sourceAmount, targetCurrency, convertedAmount } =
  storeToRefs(currencyStore);

const { switchCurrencies } = currencyStore;
</script>

<template>
  <CardDivided>
    <template #top>
      <CurrencySelect v-model="sourceCurrency" />
      <TheInput v-model="sourceAmount" class="min-w-28" />
    </template>

    <template #divider>
      <ConverterSwitchButton @click="switchCurrencies" />
    </template>

    <template #bottom>
      <CurrencySelect v-model="targetCurrency" />
      <TheInput v-model="convertedAmount" disabled class="min-w-28" />
    </template>
  </CardDivided>

  <ConverterDetails class="mt-10" />
</template>

<style scoped></style>
