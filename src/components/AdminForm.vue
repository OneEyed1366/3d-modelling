<script lang="ts">
import { defineComponent } from 'vue';
// Localization
import { useI18n } from 'vue-i18n';
import useDesignStore from '@/store/design-calculator_store';

export default defineComponent({
  name: 'AdminFormComponent',
  props: {
    onClick: {
      type: Function,
      required: true,
    },
  },
  methods: {
    async submit(): Promise<boolean> {
      const { onClick } = this.props;
      const {
        minPrice,
        currency,
        modelsSearchFee,
        qualityFee,
        urgentlyFee,
        furnitureFee,
        schemaFee,
      } = this.store;

      return !!(await onClick({
        minPrice,
        currency,
        modelsSearchFee,
        qualityFee,
        urgentlyFee,
        furnitureFee,
        schemaFee,
      }));
    },
  },
  setup(props) {
    const { t } = useI18n();
    const store = useDesignStore();

    return {
      props,
      t,
      store,
    };
  },
});
</script>

<template>
  <article class="wrapper">
    <fieldset>
      <form>
        <label for="admin-form-min_price">
          <span>{{ t('components.admin-form.min-price') }}</span>
          :
          <input
            required type="number"
            min="0"
            id="admin-form-min_price"
            v-model.number="store.minPrice"
          >
        </label>
        <label for="admin-form-schema_fee">
          <span>{{ t('components.admin-form.schema-fee') }}</span>
          :
          <input
            required
            min="0"
            type="number"
            id="admin-form-schema_fee"
            v-model.number="store.schemaFee"
          >
        </label>
        <label for="admin-form-quality_fee">
          <span>{{ t('components.admin-form.quality-fee') }}</span>
          :
          <input
            required
            min="0"
            type="number"
            id="admin-form-quality_fee"
            v-model.number="store.qualityFee"
          >
        </label>
        <label for="admin-form-furniture_fee">
          <span>{{ t('components.admin-form.furniture-fee') }}</span>
          :
          <input
            required
            min="0"
            type="number"
            id="admin-form-furniture_fee"
            v-model.number="store.furnitureFee"
          >
        </label>
        <label for="admin-form-models_search_fee">
          <span>{{ t('components.admin-form.models-search-fee') }}</span>
          :
          <input
            required
            min="0"
            type="number"
            id="admin-form-models_search_fee"
            v-model.number="store.modelsSearchFee"
          >
        </label>
        <label for="admin-form-urgently_fee">
          <span>{{ t('components.admin-form.urgently-fee') }}</span>
          :
          <input
            required
            min="0"
            type="number"
            id="admin-form-urgently_fee"
            v-model.number="store.urgentlyFee"
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
