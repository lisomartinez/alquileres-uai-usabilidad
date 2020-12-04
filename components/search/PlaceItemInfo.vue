<template>
  <div class="is-flex is-flex-direction-column">
    <div>
      <p class="is-size-3">{{ title }}</p>
    </div>
    <div>
      <p class="is-size-5">
        <span class="place--info__label">Direccion: </span>{{ address }}
      </p>
      <p class="is-size-5">
        <span class="place--info__label">Localidad: </span>
        {{ town }}
      </p>
    </div>
    <div>
      <p class="is-size-5">
        <span class="place--info__label">Capacidad: </span>
        {{ capacity }}
      </p>
      <p class="is-size-5">
        <span class="place--info__label">Habitaciones: </span>
        {{ rooms }}
      </p>
      <p class="is-size-5">
        <span class="place--info__label">Banos: </span>
        {{ rest }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'PlaceItemInfo',
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
  },
})
</script>

<style lang="scss" scoped>
.place--info__label {
  font-weight: bold;
}
</style>
