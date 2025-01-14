import { isValidDateFormat } from '@/utils/date.utils';
import { getErrorMessage } from '@/utils/http.utils';
import { apiClient } from '../client';
import type { CurrencyResponse } from '../types/currency';

class CurrencyApiService {
  private readonly baseUrl = '/exchangerates/tables/A';

  public async getCurrentRates(): Promise<CurrencyResponse> {
    const url = `${this.baseUrl}/`;

    try {
      const response = await apiClient.get<CurrencyResponse[]>(url);
      return response.data[0];
    } catch (error: unknown) {
      throw new Error(getErrorMessage(error));
    }
  }

  public async getCurrentRatesByDate(date: string): Promise<CurrencyResponse> {
    if (!isValidDateFormat(date)) {
      throw new Error('Invalid date format. Please use YYYY-MM-DD');
    }

    const url = `${this.baseUrl}/${date}`;

    try {
      const response = await apiClient.get<CurrencyResponse[]>(url);
      return response.data[0];
    } catch (error: unknown) {
      throw new Error(getErrorMessage(error));
    }
  }
}

export const currencyApi = new CurrencyApiService();
