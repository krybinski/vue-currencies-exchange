<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { defineAsyncComponent } from 'vue';
import { useCurrencyStore } from '@/stores/currency';
import TheSelect from '../forms/TheSelect.vue';

const CurrencyFlag = defineAsyncComponent(() => import('./CurrencyFlag.vue'));

const model = defineModel<string>({
  required: true,
});

const currencyStore = useCurrencyStore();

const { currencyCodeOptions } = storeToRefs(currencyStore);
</script>

<template>
  <div class="flex items-center gap-3 w-full">
    <CurrencyFlag :currency-code="model" />
    <TheSelect v-model="model" :options="currencyCodeOptions" full-width />
  </div>
</template>

<style scoped></style>
