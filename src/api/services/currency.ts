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
}

export const currencyApi = new CurrencyApiService();
