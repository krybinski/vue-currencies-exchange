<script setup lang="ts">
interface Props {
  error: string;
}

defineProps<Props>();
</script>

<template>
  <div class="text-red-500 text-sm">{{ error }}</div>
</template>

<style scoped></style>
