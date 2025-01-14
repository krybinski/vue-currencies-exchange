import { describe, it, expect, beforeEach, vi } from 'vitest';
import CardDivided from '@/components/common/CardDivided.vue';
import TheInput from '@/components/forms/TheInput.vue';
import { useCurrencyStore } from '@/stores/currency';
import { createTestingPinia } from '@pinia/testing';
import { flushPromises, mount } from '@vue/test-utils';
import ConverterDetails from './ConverterDetails.vue';
import ConverterSwitchButton from './ConverterSwitchButton.vue';
import CurrencyConverter from './CurrencyConverter.vue';
import CurrencySelect from './CurrencySelect.vue';

vi.mock('../ConverterDetails.vue', async () => {
  const actual = await vi.importActual('../ConverterDetails.vue');
  return {
    default: {
      name: 'ConverterDetails',
      template: '<div>Converter Details</div>',
      ...(actual as any)?.default,
    },
  };
});

vi.mock('./CurrencySelect.vue', () => ({
  default: {
    name: 'CurrencySelect',
    template: '<select />',
  },
}));

describe('CurrencyConverter', () => {
  const createWrapper = (initialState = {}) => {
    return mount(CurrencyConverter, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
            initialState: {
              currency: {
                sourceCurrency: 'USD',
                targetCurrency: 'EUR',
                sourceAmount: 100,
                convertedAmount: 85,
                ...initialState,
              },
            },
          }),
        ],
      },
    });
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders properly with all components', async () => {
    const wrapper = createWrapper();

    expect(wrapper.findComponent(CardDivided).exists()).toBe(true);
    expect(wrapper.findAllComponents(CurrencySelect)).toHaveLength(2);
    expect(wrapper.findAllComponents(TheInput)).toHaveLength(2);
    expect(wrapper.findComponent(ConverterSwitchButton).exists()).toBe(true);

    await flushPromises();

    expect(wrapper.findComponent(ConverterDetails).exists()).toBe(true);
  });

  it('binds source currency select correctly', async () => {
    const wrapper = createWrapper();
    const store = useCurrencyStore();

    const sourceCurrencySelect = wrapper.findAllComponents(CurrencySelect)[0];
    await sourceCurrencySelect.setValue('PLN');

    expect(store.sourceCurrency).toBe('PLN');
  });

  it('binds target currency select correctly', async () => {
    const wrapper = createWrapper();
    const store = useCurrencyStore();

    const targetCurrencySelect = wrapper.findAllComponents(CurrencySelect)[1];
    await targetCurrencySelect.setValue('EUR');

    expect(store.targetCurrency).toBe('EUR');
  });

  it('binds source amount input correctly', async () => {
    const wrapper = createWrapper();
    const store = useCurrencyStore();

    const sourceInput = wrapper.findAllComponents(TheInput)[0];
    await sourceInput.setValue(100);

    expect(store.sourceAmount).toBe(100);
  });

  it('calls switchCurrencies when switch button is clicked', async () => {
    const wrapper = createWrapper();
    const store = useCurrencyStore();

    await wrapper.findComponent(ConverterSwitchButton).trigger('click');

    expect(store.switchCurrencies).toHaveBeenCalledTimes(1);
  });
});
