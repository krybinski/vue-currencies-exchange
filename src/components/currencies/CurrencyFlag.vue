<script setup lang="ts">
import 'flag-icons/css/flag-icons.min.css';
import { computed } from 'vue';

interface Props {
  currencyCode: string;
}

const props = defineProps<Props>();

const country = computed(() => {
  return props.currencyCode.slice(0, 2).toLocaleLowerCase();
});
</script>

<template>
  <div class="flex items-center">
    <span
      :class="`fi-${country}`"
      class="fi fis !w-7 !h-7 rounded-full border border-gray-300"
    ></span>
  </div>
</template>

<style scoped></style>
