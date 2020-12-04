<template>
  <div class="is-flex is-flex-direction-column">
    <div>
      <!--      <app-swiper :slides="place.photos"></app-swiper>-->
    </div>
    <div class="container">
      <div class="is-flex is-justify-center">
        <div class="card mr-6">
          <div class="card-content">
            <place-item-info
              :id="place.id"
              :rooms="place.rooms"
              :rest="place.rest"
              :price="place.price"
              :capacity="place.capacity"
              :address="place.address"
              :title="place.title"
              :town="place.town"
            ></place-item-info>
          </div>
        </div>
        <div class="card ml-6">
          <div class="card-content">HOLA</div>
        </div>
      </div>
      <div class="is-flex is-justify-center">
        <div class="card mr-6">
          <div class="card-content">HOLA</div>
        </div>
        <div class="card ml-6">
          <div class="card-content">HOLA</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Place } from '~/store/models'
import AppSwiper from '~/components/AppSwiper.vue'
import PlaceItemInfo from '~/components/search/PlaceItemInfo.vue'

export default Vue.extend({
  name: 'Id',
  components: {
    AppSwiper,
    PlaceItemInfo,
  },
  layout: 'pages',
  data() {
    return {
      place: {
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
      } as Place,
    }
  },
})
</script>
