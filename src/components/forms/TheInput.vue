<script setup lang="ts">
import { computed, useId } from 'vue';

interface Props {
  label?: string;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  id?: string;
  min?: number;
  max?: number;
  value?: string | number;
}

interface Emits {
  (e: 'input', event: Event): void;
  (e: 'blur', event: FocusEvent): void;
  (e: 'focus', event: FocusEvent): void;
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  placeholder: '',
  disabled: false,
  required: false,
  id: '',
  min: 0,
  max: 1000000,
  value: 0,
});

const emit = defineEmits<Emits>();

const model = defineModel<string | number>();

const id = computed(() => props.id || `input-${useId()}`);

function handleNumberInput() {
  if (model.value === '' || model.value === undefined) {
    model.value = 0;
  }

  if (props.min !== undefined && +model.value < props.min) {
    model.value = 0;
  }

  if (props.max !== undefined && +model.value > props.max) {
    model.value = props.max;
  }
}

function handleBlur(event: FocusEvent) {
  if (props.type === 'number') {
    handleNumberInput();
  }

  emit('blur', event);
}
</script>

<template>
  <div class="input__wrapper">
    <label v-if="label" :for="id" class="input__label">{{ label }}</label>
    <input
      v-model="model"
      :id="id"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      :required="required"
      :min="min"
      :max="max"
      :class="['input__field', { 'input__field--error': error }]"
      @input="$emit('input', $event)"
      @blur="handleBlur"
      @focus="$emit('focus', $event)"
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
