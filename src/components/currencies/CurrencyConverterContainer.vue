<script setup lang="ts">
import { onMounted } from 'vue';
import { useCurrencyRates } from '@/composables/useCurrencyRates';
import { useCurrencyRatesAvailable } from '@/composables/useCurrencyRatesAvailable';
import TheLoader from '../common/TheLoader.vue';
import CurrencyConverter from './CurrencyConverter.vue';
import CurrencyConverterError from './CurrencyConverterError.vue';

const { loading, fetchRates } = useCurrencyRates();
const { showConverter } = useCurrencyRatesAvailable();

onMounted(fetchRates);
</script>

<template>
  <div class="mx-auto w-full sm:w-3/4 md:w-1/2 lg:w-2/5 xl:w-1/3 2xl:w-1/4">
    <TheLoader :loading="loading" center />
    <div v-if="!loading">
      <CurrencyConverterError class="mt-2 text-center" />
    </div>
    <div v-if="!loading && showConverter" class="mt-10">
      <CurrencyConverter />
    </div>
  </div>
</template>

<style scoped></style>
