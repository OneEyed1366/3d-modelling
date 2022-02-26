import { defineStore } from 'pinia';

export interface adminDesignCalculatorType {
  currency: 'RUB' | 'USD',
  minPrice: number,
  maxPrice: number,
  modelsSearchFee: number,
  urgentlyFee: number,
}

export interface designCalculatorType extends adminDesignCalculatorType {
  currPrice: number,
  isImportant: boolean,
}

const useDesignStore = defineStore('design-calculator', {
  state: (): designCalculatorType => ({
    isImportant: false,
    currency: 'RUB',
    minPrice: 0,
    currPrice: 0,
    maxPrice: 0,
    modelsSearchFee: 0,
    urgentlyFee: 0,
  }),
  getters: {
    getPrice: (state) => (
      state.isImportant
        ? state.currPrice * state.urgentlyFee
        : state.currPrice
    ),
  },
  actions: {
    async set(
      { minPrice, maxPrice, urgentlyFee, modelsSearchFee, currency }: adminDesignCalculatorType,
    ) {

    },
  },
});

export default useDesignStore;
