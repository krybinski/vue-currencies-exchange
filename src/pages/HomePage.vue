<script setup lang="ts">
import TheHeading from '@/components/common/TheHeading.vue';
import CurrencyConverter from '@/components/CurrencyConverter.vue';
import TheContainer from '@/layouts/TheContainer.vue';
</script>

<template>
  <main class="w-full">
    <TheContainer>
      <TheHeading title="Currency Converter" center />
      <CurrencyConverter class="mt-10" />
    </TheContainer>
  </main>
</template>
