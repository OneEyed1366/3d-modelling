import { defineStore } from 'pinia';
import {
  getDatabase, onValue, ref, set,
} from 'firebase/database';
import axios from 'axios';

export interface adminDesignCalculatorType {
  currency: 'RUB' | 'USD',
  minPrice: number,
  qualityFee: number,
  modelsSearchFee: number,
  urgentlyFee: number,
  furnitureFee: number,
  schemaFee: number,
}

export interface designCalculatorType extends adminDesignCalculatorType {
  isSchema: boolean,
  isQuality: boolean,
  isUrgently: boolean,
  isSearchModels: boolean,
  furnitureLevel: number,
}

const useDesignStore = defineStore('design-calculator', {
  state: (): designCalculatorType => ({
    isSchema: false,
    isQuality: false,
    isUrgently: false,
    isSearchModels: false,
    currency: 'RUB',
    minPrice: 0,
    qualityFee: 0,
    modelsSearchFee: 0,
    urgentlyFee: 0,
    furnitureFee: 0,
    schemaFee: 0,
    furnitureLevel: 0,
  }),
  getters: {
    getCurrentPrice: (state): string => {
      let result = state.minPrice;

      if (state.isSchema) {
        // EXAMPLE
        // minPrice = 138; qualityFee = 15;
        // ((138 / 100) * 15) + 138
        result += ((state.minPrice / 100) * state.qualityFee);
      }

      if (state.isQuality) {
        // EXAMPLE
        // minPrice = 138; qualityFee = 15;
        // ((138 / 100) * 15) + 138
        result += ((state.minPrice / 100) * state.qualityFee);
      }

      if (state.isUrgently) {
        // EXAMPLE
        // minPrice = 138; urgentlyFee = 15;
        // ((138 / 100) * 15) + 138
        result += ((state.minPrice / 100) * state.urgentlyFee);
      }

      if (state.isSearchModels) {
        // EXAMPLE
        // minPrice = 138; modelsSearchFee = 15;
        // ((138 / 100) * 15) + 138
        result += ((state.minPrice / 100) * state.modelsSearchFee);
      }

      if (state.furnitureLevel > 0) {
        // EXAMPLE
        // minPrice = 138; furnitureFee = 15; furnitureLevel = 2;
        // ((138 / 100) * 15) * 2 + 138
        result += (((state.minPrice / 100) * state.furnitureFee) * state.furnitureLevel);
      }

      return `${result.toFixed(2)} ${state.currency}`;
    },
  },
  actions: {
    async exchange({ data, from, to }: { data: number, from: string, to: string }): Promise<void> {
      const id = 'a3f4b0e0-97b2-11ec-a3b9-fd045c3b6c30';

      const rates = (await axios
        .get(`https://freecurrencyapi.net/api/v2/latest?apikey=${id}&base_currency=${from}`))
        .data
        .data;

      this.minPrice = +(data * rates[to]).toFixed(2);
    },
    async get(): Promise<boolean> {
      return new Promise((resolve) => {
        const db = ref(getDatabase(), '/');
        try {
          onValue(db, ((data) => {
            Object.assign(this, data.val());

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
      urgentlyFee,
      modelsSearchFee,
      furnitureFee,
      qualityFee,
      currency,
      schemaFee,
    }: adminDesignCalculatorType): Promise<boolean> {
      return new Promise((resolve) => {
        const db = getDatabase();

        set(ref(db, '/'), {
          minPrice,
          urgentlyFee,
          modelsSearchFee,
          furnitureFee,
          qualityFee,
          currency,
          schemaFee,
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
