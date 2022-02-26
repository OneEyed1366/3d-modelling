<script lang="ts">
import { defineComponent } from 'vue';
// Localization
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'UserFormComponent',
  props: {
    onClick: {
      type: Function,
      required: true,
    },
  },
  methods: {
    async submit(): Promise<boolean> {
      const { onClick } = this.props;
      const { email, password } = this;

      return !!(await onClick({
        email,
        password,
      }));
    },
  },
  data() {
    return {
      email: undefined,
      password: undefined,
    };
  },
  setup(props) {
    const { t } = useI18n();

    return {
      props,
      t,
    };
  },
});
</script>

<template>
  <article class="wrapper">
    <fieldset>
      <form>
        <label for="user-form-email">
          <span>{{ t('components.user-form.email') }}</span>
          :
          <input required type="email" id="user-form-email" v-model="email">
        </label>
        <label for="user-form-password">
          <span>{{ t('components.user-form.password') }}</span>
          :
          <input required type="password" id="user-form-password" v-model="password">
        </label>
      </form>
      <button type="submit" @click="submit">
        {{ t('components.user-form.submit') }}
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
