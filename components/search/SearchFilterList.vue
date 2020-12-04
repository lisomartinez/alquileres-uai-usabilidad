<template>
  <div class="is-flex is-flex-direction-column">
    <div class="card">
      <div class="card-header">
        <p class="card-header-title">Precio por noche</p>
        <a href="#" class="card-header-icon" aria-label="more options">
          <span class="icon">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </a>
      </div>

      <div class="card-content">
        <div class="control mt-6">
          <vue-slider v-model="price"></vue-slider>
        </div>
      </div>
    </div>

    <div class="card mt-6">
      <div class="card-header">
        <p class="card-header-title">Caracteristicas</p>
        <a href="#" class="card-header-icon" aria-label="more options">
          <span class="icon">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </a>
      </div>

      <div class="card-content">
        <div class="border-divider">
          <p class="is-size-5 has-text-centered">Accesibilidad</p>
          <input
            id="mascotas-checkradio"
            class="is-checkradio"
            type="checkbox"
            name="exampleCheckboxDefault"
          />
          <label for="mascotas-checkradio">Mascotas</label>
        </div>
        <div class="border-divider">
          <p class="is-size-5 has-text-centered">Servicios de Dormitorio</p>
          <div class="is-flex is-flex-direction-column">
            <div class="control">
              <input
                id="cama-simple"
                class="is-checkradio"
                type="checkbox"
                name="cama-simple"
              />
              <label for="cama-simple">Cama Simple</label>
            </div>
            <div class="control">
              <input
                id="cama-doble"
                class="is-checkradio"
                type="checkbox"
                name="cama-doble"
              />
              <label for="cama-doble">Cama Doble</label>
            </div>
          </div>
        </div>
        <div>
          <p class="is-size-5 has-text-centered">
            Servicios de Entretenimiento
          </p>
          <div class="control mt-6"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import 'vue-slider-component/theme/material.css'

export default Vue.extend({
  name: 'SearchFilterList',
  data() {
    return {
      price: 50,
    }
  },
})
</script>

<style lang="scss" scoped>
.border-divider {
  border-bottom: 1px solid lightgray;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
}
</style>
