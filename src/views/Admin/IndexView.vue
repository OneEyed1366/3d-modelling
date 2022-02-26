<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import useDesignStore from '@/store/design-calculator_store';
import AdminFormComponent from '@/components/AdminForm.vue';
import AdminHeader from '@/components/AdminHeader.vue';

export default defineComponent({
  name: 'AdminIndexView',
  components: { AdminHeader, AdminFormComponent },
  setup() {
    const { t } = useI18n();
    const store = useDesignStore();

    return {
      t,
      store,
    };
  },
});
</script>

<template>
  <article class="wrapper">
    <AdminHeader />
    <AdminFormComponent :on-click="store.set" />
  </article>
</template>

<style lang="scss" scoped>
.wrapper {}
</style>
