<script lang="ts">
import { defineComponent } from 'vue';
// Store
import useUsersStore from '@/store/users_store';
import UserFormComponent from '@/components/UserForm.vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'AuthLoginView',
  components: {
    UserFormComponent,
  },
  setup() {
    const { t } = useI18n();
    const store = useUsersStore();

    return {
      t,
      store,
    };
  },
});
</script>

<template>
  <article>
    <header>
      {{ t('views.login.title') }}
    </header>
    <UserFormComponent :on-click="store.authenticate" />
  </article>
</template>

<style scoped lang="scss">

</style>
