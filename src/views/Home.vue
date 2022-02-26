<script lang="ts">
import { defineComponent } from 'vue';
// Components
import DesignCalculatorHeader from '@/components/Header.vue';

export default defineComponent({
  name: 'DesignCalculatorIndexView',
  components: {
    DesignCalculatorHeader,
  },
});
</script>

<template>
  <main class="wrapper">
    <DesignCalculatorHeader />
  </main>
</template>

<style scoped lang="scss">
.wrapper {}
</style>
