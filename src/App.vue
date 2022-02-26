<script lang="ts">
import { useI18n } from 'vue-i18n';
import { routes } from '@/router';
import { RouteRecordRaw } from 'vue-router';

type dataType = {
  routes: RouteRecordRaw[]
};

export default {
  data(): dataType {
    return {
      routes,
    };
  },
  setup(): any {
    const { t } = useI18n();

    return {
      t,
    };
  },
};
</script>

<template>
  <nav id="nav">
    <router-link v-for="route in routes" :key="route.name" :to="route.path">
      {{ route.name }}
    </router-link>
  </nav>
  <main>
    <router-view/>
  </main>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
