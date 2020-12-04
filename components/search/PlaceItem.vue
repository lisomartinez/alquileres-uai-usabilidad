<template>
  <div>
    <div class="image is-16by9">
      <img src="https://bulma.io/images/placeholders/640x360.png" alt="" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'PlaceItem',
  components: {},
  props: {
    id: {
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
  },
})
</script>
