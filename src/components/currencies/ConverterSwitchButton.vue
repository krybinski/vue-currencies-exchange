<script setup lang="ts">
interface Emits {
  (e: 'click'): void;
}

defineEmits<Emits>();
</script>

<template>
  <button
    class="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-blue-500 p-2 text-white transition-colors hover:bg-blue-600"
    @click="$emit('click')"
  >
    <span class="text-lg leading-none">⇅</span>
  </button>
</template>

<style scoped></style>
