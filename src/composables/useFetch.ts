import { ref, shallowRef } from 'vue';
import { getErrorMessage } from '@/utils/http.utils';

export function useFetch<T>() {
  const data = ref<T | null>(null);
  const fetchError = shallowRef<string | null>(null);
  const loading = shallowRef(false);

  const fetchHandler = async (fetchFunction: () => Promise<T>) => {
    try {
      fetchError.value = null;
      loading.value = true;

      const response = await fetchFunction();

      data.value = response;
    } catch (e: unknown) {
      fetchError.value = getErrorMessage(e);
    } finally {
      loading.value = false;
    }
  };

  return {
    data,
    fetchError,
    loading,
    fetchHandler,
  };
}
