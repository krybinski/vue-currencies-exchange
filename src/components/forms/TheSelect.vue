<script setup lang="ts">
import { computed, useId } from 'vue';
import type { SelectOption } from '@/types';

interface Props {
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  id?: string;
  options: SelectOption[];
  fullWidth?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: 'Select an option',
  disabled: false,
  id: '',
  options: () => [],
  fullWidth: false,
});

const model = defineModel<string | number>();

const id = computed(() => props.id || `select-${useId()}`);
</script>

<template>
  <div :class="['select__wrapper', { 'select__wrapper--full-width': fullWidth }]">
    <label v-if="label" :for="id" class="select__label">{{ label }}</label>
    <select
      v-model="model"
      :id="id"
      :disabled="disabled"
      :class="['select__field', { 'select__field--error': error }]"
    >
      <option value="" disabled selected>{{ placeholder }}</option>
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>
    <span v-if="error" class="select__error-message">{{ error }}</span>
  </div>
</template>

<style scoped>
.select__wrapper--full-width {
  @apply w-full;
}

.select__label {
  @apply font-medium text-gray-900;
}

.select__field {
  @apply block w-full cursor-pointer appearance-none rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900;
  @apply focus:border-blue-500 focus:ring-blue-500;
  @apply disabled:cursor-not-allowed disabled:bg-gray-200;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
}

.select__field--error {
  @apply border-red-500;
}

.select__error-message {
  @apply text-red-500;
}
</style>
