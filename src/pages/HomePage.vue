<script setup lang="ts">
import TheHeading from '@/components/common/TheHeading.vue';
import CurrencyConverterContainer from '@/components/CurrencyConverterContainer.vue';
import TheContainer from '@/layouts/TheContainer.vue';
</script>

<template>
  <main class="w-full">
    <TheContainer>
      <TheHeading title="Currency Converter" center />
      <CurrencyConverterContainer />
    </TheContainer>
  </main>
</template>
