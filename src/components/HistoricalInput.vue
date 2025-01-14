<script setup lang="ts">
import '@vuepic/vue-datepicker/dist/main.css';

import VueDatePicker from '@vuepic/vue-datepicker';
import { useHistorical } from '@/composables/useHistorical';

const { historicalDate, disabledAfterToday, changeDate } = useHistorical();
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
</template>

<style scoped>
:deep(.dp__input) {
  @apply rounded-lg border-gray-200 text-center;
}
</style>
