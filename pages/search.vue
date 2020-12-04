<template>
  <main class="columns mx-6 mt-6">
    <aside class="is-one-third mr-6">
      <search-filter-list></search-filter-list>
    </aside>
    <div class="mx-6"></div>
    <section class="place-list ml-6">
      <place-list class="mr-4"></place-list>
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
