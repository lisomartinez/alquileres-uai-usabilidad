<template>
  <div class="card">
    <div class="card-content">
      <div class="columns">
        <app-swiper :slides="photos" class="is-two-fifths mr-6"></app-swiper>
        <place-item-info
          :id="id"
          class="is-three-fifths"
          :address="address"
          :capacity="capacity"
          :price="price"
          :rest="rest"
          :rooms="rooms"
          :town="town"
          :title="title"
        ></place-item-info>
      </div>
      <div class="card-footer">
        <p class="card-footer-item">
          <span class="is-size-4 has-text-weight-bold"> $ {{ price }} </span>
        </p>
        <p class="card-footer-item">
          <span> Ver detalles </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AppSwiper from '~/components/AppSwiper.vue'
import PlaceItemInfo from '~/components/search/PlaceItemInfo.vue'

export default Vue.extend({
  name: 'PlaceItem',
  components: {
    AppSwiper,
    PlaceItemInfo,
  },
  props: {
    id: {
      required: true,
      type: String,
    },
    title: {
      required: true,
      type: String,
    },
    address: {
      required: true,
      type: String,
    },
    town: {
      required: true,
      type: String,
    },
    capacity: {
      required: true,
      type: Number,
    },
    rooms: {
      required: true,
      type: Number,
    },
    rest: {
      required: true,
      type: Number,
    },
    price: {
      required: true,
      type: Number,
    },
    description: {
      required: true,
      type: String,
    },
    photos: {
      required: true,
      type: Array,
    },
  },
})
</script>
