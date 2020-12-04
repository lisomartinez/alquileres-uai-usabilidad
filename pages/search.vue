<template>
  <main class="columns mx-6 mt-6">
    <aside class="is-one-fifth mr-6">
      <search-filter-list></search-filter-list>
    </aside>
    <section class="mx-6">
      <place-list></place-list>
    </section>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import SearchFilterList from '~/components/search/SearchFilterList.vue'
import PlaceList from '~/components/search/PlaceList.vue'
export default Vue.extend({
  name: 'Search',
  components: {
    SearchFilterList,
    PlaceList,
  },
  layout: 'pages',
})
</script>
