import { defineStore } from 'pinia';
import {
  getDatabase, ref, set, onValue,
} from 'firebase/database';

export interface adminDesignCalculatorType {
  currency: 'RUB' | 'USD',
  minPrice: number,
  maxPrice: number,
  modelsSearchFee: number,
  urgentlyFee: number,
}

export interface designCalculatorType extends adminDesignCalculatorType {
  currPrice: number,
  isUrgently: boolean,
}

const useDesignStore = defineStore('design-calculator', {
  state: (): designCalculatorType => ({
    isUrgently: false,
    currency: 'RUB',
    minPrice: 0,
    currPrice: 0,
    maxPrice: 0,
    modelsSearchFee: 0,
    urgentlyFee: 0,
  }),
  getters: {
    getCurrentPrice: (state): number => {
      if (state.isUrgently) {
        return ((state.currPrice * state.urgentlyFee) * 100);
      }

      return state.currPrice;
    },
  },
  actions: {
    setCurrPrice(newPrice: number): boolean {
      try {
        this.currPrice = newPrice;

        return true;
      } catch (error) {
        console.error(`Error in setting up new price -> ${error}`);

        return false;
      }
    },
    async get(): Promise<boolean> {
      return new Promise((resolve) => {
        const db = ref(getDatabase(), '/');
        try {
          onValue(db, (({ val }) => {
            const data: adminDesignCalculatorType = val();

            Object.assign(this, data);

            resolve(true);
          }));
        } catch (getFromDbError) {
          console.error(`Error in Get from db -> ${getFromDbError}`);

          resolve(false);
        }
      });
    },
    async set({
      minPrice,
      maxPrice,
      urgentlyFee,
      modelsSearchFee,
      currency,
    }: adminDesignCalculatorType): Promise<boolean> {
      return new Promise((resolve) => {
        const db = getDatabase();

        set(ref(db, '/'), {
          minPrice,
          maxPrice,
          urgentlyFee,
          modelsSearchFee,
          currency,
        })
          .then(() => resolve(true))
          .catch((updateDbError) => {
            console.error(`Updating DB Error -> ${updateDbError}`);

            resolve(false);
          });
      });
    },
  },
});

export default useDesignStore;
