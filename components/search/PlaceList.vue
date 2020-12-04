<template>
  <div class="list--container">
    <h1 class="title is-uppercased has-text-centered">Resultado</h1>
    <div class="is-flex is-justify-between">
      <place-item
        v-for="place in places"
        :id="place.id"
        :key="place.id"
        :title="place.title"
        :photos="place.photos"
        :address="place.address"
        :capacity="place.capacity"
        :description="place.description"
        :price="place.price"
        :rest="place.rest"
        :rooms="place.rooms"
        :town="place.town"
      ></place-item>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PlaceItem from '~/components/search/PlaceItem.vue'
import { Place } from '~/store/models'

export default Vue.extend({
  name: 'PlaceList',
  components: {
    PlaceItem,
  },
  data() {
    return {
      places: [
        {
          id: '1',
          description: 'Super habitable',
          capacity: 4,
          address: 'Av. Siempre viva 123',
          town: 'Buenos Aires',
          price: 600,
          rest: 1,
          rooms: 4,
          photos: [
            'https://firebasestorage.googleapis.com/v0/b/alquileres-uai-usabilidad.appspot.com/o/fotos%2F1%2F1.webp?alt=media',
            'https://firebasestorage.googleapis.com/v0/b/alquileres-uai-usabilidad.appspot.com/o/fotos%2F1%2F2.webp?alt=media',
            'https://firebasestorage.googleapis.com/v0/b/alquileres-uai-usabilidad.appspot.com/o/fotos%2F1%2F3.webp?alt=media',
          ],
          title: 'Hermosa casa',
        },
      ] as Place[],
    }
  },
})
</script>

<style lang="scss" scoped>
.list--container {
  width: 100%;
}
</style>
