import { defineStore } from 'pinia';

export type designCalculatorType = {
  currency: 'RUB' | 'USD',
  minPrice: number,
  currPrice: number,
  maxPrice: number,
  modelsSearchFee: number,
  importanceFee: number,
  isImportant: boolean,
};

const useDesignStore = defineStore('design-calculator', {
  state: (): designCalculatorType => ({
    isImportant: false,
    currency: 'RUB',
    minPrice: 0,
    currPrice: 0,
    maxPrice: 0,
    modelsSearchFee: 0,
    importanceFee: 0,
  }),
  getters: {
    getPrice: (state) => (
      state.isImportant
        ? state.currPrice * state.importanceFee
        : state.currPrice
    ),
  },
  actions: {
    setMinPrice(price: number) {
      this.minPrice = price;
    },
    setMaxPrice(price: number) {
      this.maxPrice = price;
    },
    setCurrPrice(price: number) {
      this.currPrice = price;
    },
    setImportancePrice(percent: number) {
      this.importanceFee = percent;
    },
    setIsImportant(value: boolean) {
      this.isImportant = value;
    },
  },
});

export default useDesignStore;
