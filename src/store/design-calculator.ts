import { defineStore } from 'pinia';

export type designCalculatorType = {
  currency: string,
  minPrice: number,
  currPrice: number,
  maxPrice: number,
  modelsSearchPrice: number,
  importancePrice: number,
  isImportant: boolean,
};

const useDesignStore = defineStore('design-calculator', {
  state: (): designCalculatorType => ({
    currency: 'rub',
    minPrice: 0,
    currPrice: 0,
    maxPrice: 0,
    modelsSearchPrice: 0,
    importancePrice: 0,
    isImportant: false,
  }),
  getters: {
    getPrice: (state) => (
      state.isImportant
        ? state.currPrice * state.importancePrice
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
      this.importancePrice = percent;
    },
    setIsImportant(value: boolean) {
      this.isImportant = value;
    },
  },
});

export default useDesignStore;
