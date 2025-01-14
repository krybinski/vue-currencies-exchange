<script setup lang="ts">
interface Props {
  error: string;
}

defineProps<Props>();
</script>

<template>
  <div class="text-sm text-red-500">{{ error }}</div>
</template>

<style scoped></style>
