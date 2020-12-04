<template>
  <main class="hero is-dark is-medium">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-size-1 has-text-grey-lighter">Primary title</h1>
        <h2 class="subtitle">Primary subtitle</h2>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AppHero',
})
</script>

<style lang="scss" scoped>
section {
  //background: url('~assets/images/monkey-island.jpg') no-repeat;
  //background-size: cover;
}
</style>
