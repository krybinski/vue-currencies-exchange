<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  title: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  center?: boolean;
}

const { title, tag = 'h1', center = false } = defineProps<Props>();

const textSizeClass = computed(() => ({
  'text-2xl': tag === 'h1',
  'text-xl': tag === 'h2',
  'text-lg': tag === 'h3',
  'text-base': tag === 'h4',
  'text-sm': tag === 'h5',
  'text-xs': tag === 'h6',
}));
</script>

<template>
  <component :is="tag" :class="{ 'text-center': center, ...textSizeClass }" class="font-bold">
    {{ title }}
  </component>
</template>

<style scoped></style>
