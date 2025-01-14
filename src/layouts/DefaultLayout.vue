<script setup lang="ts">
interface Props {
  as?: string;
}

interface Slots {
  default: () => void;
}

defineSlots<Slots>();

const { as = 'div' } = defineProps<Props>();
</script>

<template>
  <component :is="as" class="w-full">
    <slot />
  </component>
</template>

<style scoped></style>
