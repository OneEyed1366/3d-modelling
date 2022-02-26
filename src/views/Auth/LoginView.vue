<script lang="ts">
import { defineComponent } from 'vue';
// Store
import useUsersStore from '@/store/users_store';
import UserFormComponent from '@/components/UserForm.vue';

export default defineComponent({
  name: 'Auth_LoginView',
  components: {
    UserFormComponent,
  },
  setup() {
    const store = useUsersStore();

    return {
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
