<script setup lang="ts">
import { computed } from 'vue';
import { useCurrencyRates } from '@/composables/useCurrencyRates';
import ErrorMessage from './common/ErrorMessage.vue';
import { useCurrencyRatesAvailable } from '@/composables/useCurrencyRatesAvailable';

const { applyOfflineRates } = useCurrencyRatesAvailable();

const { fetchError } = useCurrencyRates();

const error = computed(() => {
  if (applyOfflineRates.value) {
    return 'You are offline. Rates loaded from your local storage.';
  }

  return fetchError.value;
});
</script>

<template>
  <ErrorMessage v-if="error" :error="error" />
</template>
