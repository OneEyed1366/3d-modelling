<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue';
// Components
import NonAdminHeader from '@/components/NonAdminHeader.vue';
import LoaderComponent from '@/components/Loader.vue';
import LangChangeComponent from '@/components/LangChangeComponent.vue';
// Async componnets
const CalculatorFormComponent = defineAsyncComponent({
  loader: () => import('@/components/CalculatorForm.vue'),
  loadingComponent: LoaderComponent,
  delay: 0,
});
const DemoImagesComponent = defineAsyncComponent({
  loader: () => import('@/components/DemoImages.vue'),
});

export default defineComponent({
  name: 'IndexView',
  components: {
    LangChangeComponent,
    CalculatorFormComponent,
    NonAdminHeader,
    DemoImagesComponent,
  },
});
</script>

<template>
  <article class="wrapper">
    <LangChangeComponent />
    <NonAdminHeader />
    <CalculatorFormComponent />
    <DemoImagesComponent />
  </article>
</template>

<style scoped lang="scss">
.wrapper {}
</style>
