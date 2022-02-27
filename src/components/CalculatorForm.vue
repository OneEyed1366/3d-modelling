<script lang="ts">
import useDesignStore from '@/store/design-calculator_store';
import { useI18n } from 'vue-i18n';
import { defineComponent } from 'vue';
// Async components
export default defineComponent({
  name: 'CalculatorFormComponent',
  data() {
    return {
      currencyTypes: [
        'RUB',
        'USD',
      ],
    };
  },
  methods: {
    async onChange(el: any): Promise<void> {
      const to = el.target.value;
      const prevValue: string = to === 'RUB' ? 'USD' : 'RUB';
      const data = this.store.minPrice;

      await this.store.exchange({ data, from: prevValue, to });
    },
  },
  setup() {
    const store = useDesignStore();
    const { t } = useI18n();

    return {
      store,
      t,
    };
  },
});
</script>

<template>
  <article class="wrapper">
    <fieldset>
      <form>
        <label for="admin-form-currency">
          <span>{{ t('components.admin-form.currency') }}</span>
          :
          <select
            v-model="store.currency"
            id="admin-form-currency"
            @change="onChange"
          >
            <option
              v-for="currencyType in currencyTypes"
              :key="currencyType"
              :value="currencyType"
            >
              {{ currencyType }}
            </option>
          </select>
        </label>
        <label for="calculator-form-quality">
          <span>{{ t('components.calculator-form.quality') }}</span>
          :
          <input
            v-model="store.isQuality"
            type="checkbox"
            id="calculator-form-quality"
          >
        </label>
        <label for="calculator-form-fulness">
          <span>{{ t('components.calculator-form.furniture') }}</span>
          :
          <input
            min="0"
            max="3"
            v-model="store.furnitureLevel"
            type="range"
            id="calculator-form-fulness"
          >
        </label>
        <label for="calculator-form-is-schema">
          <span>{{ t('components.calculator-form.is-schema') }}</span>
          :
          <input
            type="checkbox"
            id="calculator-form-is-schema"
            v-model="store.isSchema"
          >
        </label>
        <label for="calculator-form-is-models">
          <span>
            {{
              t('components.calculator-form.is-models', { percents: `${store.modelsSearchFee}%` })
            }}
          </span>
          :
          <input
            type="checkbox"
            id="calculator-form-is-models"
            v-model="store.isSearchModels"
          >
        </label>
        <label for="calculator-form-is-urgently">
          <span>
            {{
              t('components.calculator-form.is-urgently', { percents: `${store.urgentlyFee}%` })
            }}
          </span>
          :
          <input
            type="checkbox"
            id="calculator-form-is-urgently"
            v-model="store.isUrgently"
          >
        </label>
      </form>
    </fieldset>
    <footer class="cost">
      <h1>
        {{ t('components.calculator-form.cost') }}
        :
        {{ store.getCurrentPrice }}
      </h1>

    </footer>
  </article>
</template>

<style scoped lang="scss">
.wrapper {
  fieldset {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  form {
    display: flex;
    flex: 1 1 0;
    flex-flow: column nowrap;
    gap: 1em;
    align-items: flex-start;
  }
}
</style>
