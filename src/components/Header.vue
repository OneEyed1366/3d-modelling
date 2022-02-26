<script lang="ts">
import { defineComponent } from 'vue';
// i18n
import { useI18n } from 'vue-i18n';
// Store
import useDesignStore from '@/store/design-calculator_store';

export default defineComponent({
  name: 'DesignCalculatorHeader',
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
  <header class="wrapper">
    <h1>{{ t('admin_view-header-title') }}</h1>
  </header>
  <article>

  </article>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
}
</style>
