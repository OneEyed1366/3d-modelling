<script lang="ts">
import { defineComponent } from 'vue';
// Store
import useUsersStore from '@/store/users_store';
import UserFormComponent from '@/components/UserForm.vue';

export default defineComponent({
  name: 'AuthRegisterView',
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
  <article class="wrapper">
    <header>
      <h1>
        {{ t('views.register.title') }}
      </h1>
    </header>
    <UserFormComponent :on-click="store.register" />
  </article>
</template>

<style scoped lang="scss">
.wrapper {

}
</style>
