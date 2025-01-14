<script setup lang="ts">
import { useCurrencyConverter } from '@/composables/useCurrencyConverter';
import ErrorMessage from './common/ErrorMessage.vue';
import TheLoader from './common/TheLoader.vue';
import CurrencyConverter from './CurrencyConverter.vue';

const { fetchError, isLoading } = useCurrencyConverter();
</script>

<template>
  <div class="w-full sm:w-3/4 md:w-1/2 lg:w-2/5 xl:w-1/3 2xl:w-1/4 mx-auto">
    <TheLoader :loading="isLoading" center />
    <ErrorMessage v-if="fetchError" :error="fetchError" class="text-center mt-6" />
    <div class="mt-10">
      <CurrencyConverter v-if="!isLoading && !fetchError" />
    </div>
  </div>
</template>

<style scoped></style>
