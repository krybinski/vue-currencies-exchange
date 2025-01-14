<script setup lang="ts">
interface Slots {
  default: () => void;
}

defineSlots<Slots>();
</script>

<template>
  <div class="container mx-auto px-4">
    <slot />
  </div>
</template>

<style scoped></style>
