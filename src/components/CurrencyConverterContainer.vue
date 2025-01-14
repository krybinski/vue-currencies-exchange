<script setup lang="ts">
import { useCurrencyConverter } from '@/composables/useCurrencyConverter';
import TheLoader from './common/TheLoader.vue';
import CurrencyConverter from './CurrencyConverter.vue';
import CurrencyConverterError from './CurrencyConverterError.vue';
import { useConverterAvailable } from '@/composables/useConverterAvailable';

const { isLoading } = useCurrencyConverter();
const { showConverter } = useConverterAvailable();
</script>

<template>
  <div class="w-full sm:w-3/4 md:w-1/2 lg:w-2/5 xl:w-1/3 2xl:w-1/4 mx-auto">
    <TheLoader :loading="isLoading" center />
    <div v-if="!isLoading">
      <CurrencyConverterError class="text-center mt-2" />
    </div>
    <div v-if="!isLoading && showConverter" class="mt-10">
      <CurrencyConverter />
    </div>
  </div>
</template>

<style scoped></style>
