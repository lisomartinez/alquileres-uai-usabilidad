<template>
  <header>
    <nav
      aria-label="main navigation"
      class="navbar is-primary"
      role="navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img
            height="28"
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
          />
        </a>

        <a
          aria-expanded="false"
          aria-label="menu"
          class="navbar-burger burger"
          data-target="navbarBasicExample"
          role="button"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-dark" @click="toggleRegistrationMenu">
                <strong>Registrate</strong>
              </a>
              <a class="button is-dark">
                <strong>Iniciar Sesion</strong>
              </a>
              <a class="button is-light"> Mis alojamientos </a>
              <a class="button is-light"> Ayuda </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div class="container">
      <app-search-bar></app-search-bar>
    </div>
    <user-registration
      :open="isRegistrationMenuOpen"
      @close-registration="toggleRegistrationMenu"
    ></user-registration>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import AppSearchBar from '~/components/AppSearchBar.vue'
import UserRegistration from '~/components/users/UserRegistration.vue'

export default Vue.extend({
  name: 'AppHeader',
  components: {
    AppSearchBar,
    UserRegistration
  },
  data() {
    return {
      isRegistrationMenuOpen: false
    }
  },
  methods: {
    toggleRegistrationMenu(): void {
      this.isRegistrationMenuOpen = !this.isRegistrationMenuOpen
    }
  }
})
</script>
