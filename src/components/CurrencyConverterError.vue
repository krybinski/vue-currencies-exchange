<script setup lang="ts">
import { computed } from 'vue';
import { useCurrencyConverter } from '@/composables/useCurrencyConverter';
import ErrorMessage from './common/ErrorMessage.vue';
import { useConverterAvailable } from '@/composables/useConverterAvailable';

const { applyOfflineRates } = useConverterAvailable();

const { fetchError } = useCurrencyConverter();

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
