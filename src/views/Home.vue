<script lang="ts">
import { defineComponent } from 'vue';
// Components
import NonAdminHeader from '@/components/NonAdminHeader.vue';

export default defineComponent({
  name: 'IndexView',
  components: {
    NonAdminHeader,
  },
});
</script>

<template>
  <article class="wrapper">
    <NonAdminHeader />
  </article>
</template>

<style scoped lang="scss">
.wrapper {}
</style>
