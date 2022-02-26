<script lang="ts">
import { defineComponent } from 'vue';
// i18n
import { useI18n } from 'vue-i18n';
// Store
import { useDesignStore } from '@/store/design-calculator';

export default defineComponent({
  name: 'DesignCalculatorHeader',
  setup() {
    const store = useStore();
    const { t } = useI18n({
      inheritLocale: true,
      useScope: 'local',
    });

    return {
      store,
      t,
    };
  },
});
</script>

<template>
  <header class="wrapper">
    <h1>{{ t('message') }}</h1>
  </header>
</template>

<style scoped lang="scss">
.wrapper {
  background-color: black;
  height: 5rem;
  width: 5rem;
}
</style>
