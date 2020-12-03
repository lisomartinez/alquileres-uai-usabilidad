<template>
  <app-hero></app-hero>
</template>

<script lang="ts">
import Vue from 'vue'
import AppHero from '~/components/AppHero.vue'

export default Vue.extend({
  components: { AppHero },
  template: 'default'
})
</script>
