<script lang="ts">
import { defineComponent } from 'vue';
// i18n
import { useI18n } from 'vue-i18n';
// Store
import useUsersStore, { usersStoreType } from '@/store/users_store';

export default defineComponent({
  name: 'NonAdminHeader',
  methods: {
    onClick(): void {
      this.$router.push('/users/login');
    },
  },
  setup() {
    const store: usersStoreType = useUsersStore();
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
    <button class="login-btn" type="button" @click="onClick">Login</button>
  </header>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  gap: 1em;

  .login-btn {
    order: 0;
    padding: 0.5em 3em;
    background-color: #42b983;
    border-radius: 5px;
  }
}
</style>
