<template>
  <div>
    <AppHeader />
    <AppSearchBar />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AppHeader from '~/components/AppHeader.vue'
import AppSearchBar from '~/components/AppSearchBar.vue'

export default Vue.extend({
  components: {
    AppHeader,
    AppSearchBar,
  },
})
</script>

<style>
html {
  font-family: 'Circular', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
