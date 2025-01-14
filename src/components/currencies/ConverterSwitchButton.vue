<script setup lang="ts">
interface Emits {
  (e: 'click'): void;
}

defineEmits<Emits>();
</script>

<template>
  <button
    class="rounded-full w-10 h-10 bg-blue-500 p-2 text-white hover:bg-blue-600 transition-colors absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    @click="$emit('click')"
  >
    <span class="text-lg leading-none">⇅</span>
  </button>
</template>

<style scoped></style>
