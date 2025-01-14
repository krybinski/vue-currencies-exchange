import { ref } from 'vue';
import { useCurrencyConverter } from './useCurrencyConverter';

export function useHistorical() {
  const { fetchRatesByDate } = useCurrencyConverter();

  const historicalDate = ref<Date>(new Date());

  function changeDate(date: Date) {
    const formattedDate = date.toISOString().split('T')[0];

    fetchRatesByDate(formattedDate);
  }

  function disabledAfterToday(date: Date) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return date > today;
  }

  return {
    historicalDate,
    disabledAfterToday,
    changeDate,
  };
}
