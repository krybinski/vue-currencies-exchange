<script setup lang="ts">
import TheDivider from './TheDivider.vue';

interface Slots {
  top?: () => void;
  divider?: () => void;
  bottom?: () => void;
}

defineSlots<Slots>();
</script>

<template>
  <div
    class="flex flex-col items-center justify-center rounded-lg border-gray-200 bg-white p-4 shadow-md"
  >
    <div class="flex w-full gap-4">
      <slot name="top" />
    </div>
    <div class="relative my-10 w-full">
      <TheDivider />
      <slot name="divider" />
    </div>
    <div class="flex w-full gap-4">
      <slot name="bottom" />
    </div>
  </div>
</template>

<style scoped></style>
