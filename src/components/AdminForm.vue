<script lang="ts">
import { defineComponent } from 'vue';
// Localization
import { useI18n } from 'vue-i18n';
import { adminDesignCalculatorType, designCalculatorType } from '@/store/design-calculator_store';

export default defineComponent({
  name: 'AdminFormComponent',
  props: {
    onClick: {
      type: Function,
      required: true,
    },
  },
  // methods: {
  //   async submit(): Promise<boolean> {
  //     const { onClick } = this.props;
  //
  //     if (await onClick({ email, password })) {
  //       await this.$router.push('/');
  //
  //       return true;
  //     }
  //
  //     return false;
  //   },
  // },
  data(): adminDesignCalculatorType {
    return {
      minPrice: 0,
      maxPrice: 0,
      currency: 'RUB',
      modelsSearchFee: 0,
      urgentlyFee: 0,
    };
  },
  setup(props) {
    const { t } = useI18n();
    const currencyTypes: string[] = [
      'RUB',
      'USD',
    ];

    return {
      props,
      t,
      currencyTypes,
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
          <select v-model="currency" id="admin-form-currency">
            <option v-for="currencyType in currencyTypes" :key="currencyType" :value="currencyType">
              {{ currencyType }}
            </option>
          </select>
        </label>
        <label for="admin-form-min_price">
          <span>{{ t('components.admin-form.min-price') }}</span>
          :
          <input required type="number" id="admin-form-min_price" v-model.number="minPrice">
        </label>
        <label for="admin-form-max_price">
          <span>{{ t('components.admin-form.max-price') }}</span>
          :
          <input required type="number" id="admin-form-max_price" v-model.number="maxPrice">
        </label>
        <label for="admin-form-models_search_fee">
          <span>{{ t('components.admin-form.models-search-fee') }}</span>
          :
          <input
            required
            type="number"
            id="admin-form-models_search_fee"
            v-model.number="modelsSearchFee"
          >
        </label>
        <label for="admin-form-urgently_fee">
          <span>{{ t('components.admin-form.urgently-fee') }}</span>
          :
          <input
            required
            type="number"
            id="admin-form-urgently_fee"
            v-model.number="urgentlyFee"
          >
        </label>
      </form>
      <button type="submit" @click="submit">
        {{ t('components.admin-form.submit') }}
      </button>
    </fieldset>
  </article>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  fieldset {
    display: flex;
    flex-flow: column nowrap;
    padding: 1em 2em;
    gap: 1em;
  }

  form {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
  }
  label {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    gap: 0.25rem;
    width: 100%;

    input {
      width: 100%;
    }
  }
}
</style>
