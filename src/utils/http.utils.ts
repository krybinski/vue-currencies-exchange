import { isAxiosError, type AxiosError } from 'axios';

export function getErrorMessage(error: unknown, defaultError = ''): string {
  if (isAxiosError(error)) {
    const axiosError = error as AxiosError;

    if (axiosError.response) {
      return (
        (axiosError.response.data as { message?: string })?.message ||
        `Error ${axiosError.response.status}: ${axiosError.response.statusText}`
      );
    }

    if (axiosError.request) {
      return 'No response received from server';
    }
  }

  if (error instanceof Error) {
    return error.message;
  }

  return defaultError || 'An unknown error occurred';
}
