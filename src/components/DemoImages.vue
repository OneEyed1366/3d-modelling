<script lang="ts">
import useDesignStore, { designCalculatorType } from '@/store/design-calculator_store';
import { useI18n } from 'vue-i18n';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DemoImagesComponent',
  methods: {
    getImages(): string[] {
      const { isQuality, furnitureLevel } = this.store;
      const result: string[] = [];

      const nonQualityTemplate = ({
        num,
        furniture,
        ext = 'jpg',
      }: {
        num: number,
        furniture: number,
        path?: string,
        ext?: string
      }): string => `v${num}_${furniture}.${ext}`;
      const qualityTemplate = ({
        num,
        furniture,
        ext = 'jpg',
      }: {
        num: number,
        furniture: number,
        path?: string,
        ext?: string
      }): string => `v${num}_${furniture}-quality.${ext}`;

      for (let i = 1; i <= 3; i += 1) {
        if (isQuality) {
          result.push(qualityTemplate({ num: i, furniture: furnitureLevel }));
        } else {
          result.push(nonQualityTemplate({ num: i, furniture: furnitureLevel }));
        }
      }

      return result;
    },
  },
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
  <footer class="wrapper">
    <header>
      {{ t('components.demo-images.title') }}
    </header>
    <article class="container">
      <div
        class="examples"
        v-for="image in getImages()"
        :key="image"
        :style="{
        'background-image': `url(${require('@/assets/img/demo/' + image)})`
      }"
      />
    </article>
  </footer>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex: 1 0 100%;
  flex-flow: column nowrap;
  align-items: center;

  .container {
    display: flex;
    flex-flow: row wrap;
    gap: 1em;
    justify-content: space-around;
    align-items: flex-start;
    width: 100%;
    padding: 1em;

    .examples {
      border-radius: 5px;
      width: 30%;
      height: 40vh;
      background: no-repeat center / cover;
    }
  }
}
</style>
