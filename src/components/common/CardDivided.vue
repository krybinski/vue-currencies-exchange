<script setup lang="ts">
import TheDivider from './TheDivider.vue';
</script>

<template>
  <div class="bg-white rounded-lg p-4 flex flex-col items-center justify-center border-gray-200">
    <div class="flex gap-4 w-full">
      <slot name="top" />
    </div>
    <div class="relative w-full my-10">
      <TheDivider />
      <slot name="divider" />
    </div>
    <div class="flex gap-4 w-full">
      <slot name="bottom" />
    </div>
  </div>
</template>

<style scoped></style>
