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
            <user-admin></user-admin>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

import UserAdmin from '~/components/users/UserAdmin.vue'

export default Vue.extend({
  name: 'AppHeader',
  components: {
    UserAdmin,
  },
})
</script>
