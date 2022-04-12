<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'LangChangeComponent',
  data: () => ({
    langs: [
      'ru',
      'en',
    ] as string[],
  }),
  setup() {
    const { locale, availableLocales } = useI18n();

    return {
      locale,
      availableLocales,
    };
  },
});
</script>

<template>
  <select v-model="locale">
    <option v-for="locale in availableLocales" :key="`locale-${locale}`" :value="locale">
      {{ locale }}
    </option>
  </select>
</template>

<style lang="scss" scoped></style>
