export interface CurrencyRate {
  currency: string;
  code: string;
  mid: number;
}

export interface CurrencyResponse {
  table: string;
  no: string;
  effectiveDate: string;
  rates: CurrencyRate[];
}
