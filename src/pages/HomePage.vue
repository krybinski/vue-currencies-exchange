<script setup lang="ts">
import TheHeading from '@/components/common/TheHeading.vue';
import CurrencyConverterContainer from '@/components/currencies/CurrencyConverterContainer.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import TheContainer from '@/components/common/TheContainer.vue';
</script>

<template>
  <DefaultLayout>
    <TheContainer>
      <TheHeading title="Currency Converter" center />
      <CurrencyConverterContainer />
    </TheContainer>
  </DefaultLayout>
</template>
