<script setup lang="ts">
import { computed, useId } from 'vue';

interface Props {
  label?: string;
  disabled?: boolean;
  error?: string;
  id?: string;
  min?: number;
  max?: number;
}

interface Emits {
  (e: 'blur', event: FocusEvent): void;
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  id: '',
  min: 0,
  max: 1000000,
});

const emit = defineEmits<Emits>();

const model = defineModel<string | number>();

const id = computed(() => props.id || `input-${useId()}`);

function handleBlur(event: FocusEvent) {
  if (model.value === '' || model.value === undefined) {
    model.value = 0;
  }

  if (props.min !== undefined && +model.value < props.min) {
    model.value = 0;
  }

  if (props.max !== undefined && +model.value > props.max) {
    model.value = props.max;
  }

  emit('blur', event);
}
</script>

<template>
  <div class="input__wrapper">
    <label v-if="label" :for="id" class="input__label">{{ label }}</label>
    <input
      v-model="model"
      type="number"
      :id="id"
      :disabled="disabled"
      :min="min"
      :max="max"
      :class="['input__field', { 'input__field--error': error }]"
      @blur="handleBlur"
    />
    <span v-if="error" class="input__error-message">{{ error }}</span>
  </div>
</template>

<style scoped>
.input__label {
  @apply font-medium text-gray-900;
}

.input__field {
  @apply block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900;
  @apply focus:border-blue-500 focus:ring-blue-500;
  @apply disabled:cursor-not-allowed disabled:bg-gray-200;

  &--error {
    @apply border-red-500;
  }
}

.input__error-message {
  @apply text-red-500;
}
</style>
