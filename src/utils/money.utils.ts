export function formatMoney(value: number | null | undefined, decimals: number = 2): number {
  if (!value || isNaN(value)) {
    return 0;
  }

  return +value.toFixed(decimals);
}
