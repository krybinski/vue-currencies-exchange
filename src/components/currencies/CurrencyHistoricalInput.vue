<script setup lang="ts">
import { useHistorical } from '@/composables/useHistorical';
import VueDatePicker from '@vuepic/vue-datepicker';
import ErrorMessage from '../common/ErrorMessage.vue';

const { historicalDate, fetchError, disabledAfterToday, changeDate } = useHistorical();
</script>

<template>
  <VueDatePicker
    auto-apply
    format="yyyy-MM-dd"
    v-model="historicalDate"
    :disabled-week-days="[6, 0]"
    :disabled-dates="disabledAfterToday"
    :clearable="false"
    @update:model-value="changeDate"
  />
  <ErrorMessage v-if="fetchError" :error="fetchError" class="mt-2" />
</template>

<style scoped>
:deep(.dp__input) {
  @apply rounded-lg border-gray-200 text-center font-sans font-bold shadow-sm;
}

:deep(.dp__cell_inner),
:deep(.dp__calendar_header_item),
:deep(.dp__month_year_wrap) {
  @apply font-sans text-sm;
}

:deep(.dp--tp-wrap) {
  display: none;
}
</style>
