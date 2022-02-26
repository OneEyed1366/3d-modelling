<script lang="ts">
import { defineComponent } from 'vue';
// i18n
import { useI18n } from 'vue-i18n';
// Store
import useDesignStore from '@/store/design-calculator_store';

export default defineComponent({
  name: 'NonAdminHeader',
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
    <h1>{{ t('views.index.title') }}</h1>
  </header>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
}
</style>
