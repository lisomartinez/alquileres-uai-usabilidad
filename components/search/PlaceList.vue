<template>
  <div class="list--container">
    <h1 class="title is-uppercased has-text-centered">Resultado</h1>
    <place-item
      v-for="place in places"
      :id="place.id"
      :key="place.id"
      :address="place.address"
      :capacity="place.capacity"
      :description="place.description"
      :price="place.price"
      :rest="place.rest"
      :rooms="place.rooms"
      :town="place.town"
    ></place-item>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PlaceItem from '~/components/search/PlaceItem.vue'

export default Vue.extend({
  name: 'PlaceList',
  components: {
    PlaceItem,
  },
  data() {
    return {
      places: [
        {
          id: 'id1',
          description: 'Super habitable',
          capacity: 4,
          address: 'Av. Siempre viva 123',
          town: 'Buenos Aires',
          price: 600,
          rest: 1,
          rooms: 4,
        },
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
.list--container {
  width: 800px;
}
</style>
