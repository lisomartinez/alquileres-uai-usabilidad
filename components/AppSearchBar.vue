<template>
  <section class="section">
    <div class="container">
      <label class="label"> Lugar </label>
      <div class="is-flex is-flex-direction-row is-flex-wrap is-fullwidth">
        <div class="field has-addons is-fullwidth is-flex-grow-1">
          <div class="control is-flex-grow-1">
            <input class="input" placeholder="Buenos Aires" type="text" />
          </div>
          <div class="control">
            <button class="button is-success">Buscar</button>
          </div>
        </div>
      </div>

      <div
        class="is-flex is-flex-direction-row is-justify-content-center is-align-content-space-evenly"
      >
        <div class="field mx-3">
          <label class="label">Check-in</label>
          <div class="control is-flex-grow-1">
            <input :min="today" class="input" type="date" />
          </div>
        </div>
        <div class="field mx-3">
          <label class="label">Check-out</label>
          <div class="control is-flex-grow-1">
            <input :min="today" class="input" type="date" />
          </div>
        </div>
        <div class="field mx-3">
          <label class="label">Huespedes</label>
          <div class="control is-flex-grow-0 is-flex-shrink-2">
            <input class="input" placeholder="1" type="number" />
          </div>
        </div>
        <div class="field mx-3">
          <label class="label">Dormitorios</label>
          <div class="control is-flex-grow-0 is-flex-shrink-2">
            <input class="input" placeholder="1" type="number" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AppSearchBar',
  computed: {
    today(): string {
      return new Date().toDateString()
    },
  },
})
</script>
