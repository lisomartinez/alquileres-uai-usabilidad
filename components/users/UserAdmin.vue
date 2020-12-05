<template>
  <div class="buttons">
    <NuxtLink to="/search" class="button is-danger">
      <strong>Preview Resultados de busqueda</strong>
    </NuxtLink>

    <a
      v-if="!isLoggedIn"
      class="button is-dark"
      @click="toggleRegistrationMenu"
    >
      <strong>Registrate</strong>
    </a>
    <a v-if="!isLoggedIn" class="button is-dark" @click="toggleLoginMenu">
      <strong>Iniciar Sesion</strong>
    </a>
    <a v-if="isLoggedIn" class="button is-dark" @click="logout">
      <strong>Cerrar Sesion</strong>
    </a>
    <a class="button is-light"> Mis alojamientos </a>
    <a class="button is-light"> Ayuda </a>
    <div class="h-0">
      <user-registration
        :open="isRegistrationMenuOpen"
        @close-registration="toggleRegistrationMenu"
      ></user-registration>
      <user-login :open="isLoginMenuOpen" @close-login="toggleLoginMenu">
      </user-login>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { userStore } from '@/utils/store-accessor'
import UserRegistration from '~/components/users/UserRegistration.vue'
import UserLogin from '~/components/users/UserLogin.vue'

export default Vue.extend({
  name: 'UserButtonsBar',
  components: {
    UserRegistration,
    UserLogin,
  },
  data() {
    return {
      isRegistrationMenuOpen: false,
      isLoginMenuOpen: false,
    }
  },
  computed: {
    isLoggedIn() {
      return userStore.isLogged
    },
  },
  methods: {
    toggleRegistrationMenu(): void {
      this.isRegistrationMenuOpen = !this.isRegistrationMenuOpen
    },
    toggleLoginMenu(): void {
      this.isLoginMenuOpen = !this.isLoginMenuOpen
    },
    logout(): void {
      userStore.logout()
    },
  },
})
</script>
