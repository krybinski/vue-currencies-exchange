<script setup lang="ts">
import { useCurrencyStore } from '@/stores/currency';
import { storeToRefs } from 'pinia';
import CardDivided from '../common/CardDivided.vue';
import TheInput from '../forms/TheInput.vue';
import TheSelect from '../forms/TheSelect.vue';
import ConverterDetails from './ConverterDetails.vue';
import ConverterSwitchButton from './ConverterSwitchButton.vue';

const currencyStore = useCurrencyStore();

const { currencyCodeOptions, sourceCurrency, sourceAmount, targetCurrency, convertedAmount } =
  storeToRefs(currencyStore);

const { switchCurrencies } = currencyStore;
</script>

<template>
  <CardDivided>
    <template #top>
      <TheSelect v-model="sourceCurrency" :options="currencyCodeOptions" class="w-full" />
      <TheInput v-model="sourceAmount" type="number" class="min-w-28" />
    </template>

    <template #divider>
      <ConverterSwitchButton @click="switchCurrencies" />
    </template>

    <template #bottom>
      <TheSelect v-model="targetCurrency" :options="currencyCodeOptions" class="w-full" />
      <TheInput v-model="convertedAmount" type="number" disabled class="min-w-28" />
    </template>
  </CardDivided>

  <ConverterDetails class="mt-10" />
</template>

<style scoped></style>
