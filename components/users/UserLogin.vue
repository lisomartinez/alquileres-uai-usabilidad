<template>
  <div class="container">
    <div :class="{ 'is-active': open }" class="modal">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Ingrese</p>
          <button aria-label="close" class="delete" @click="close"></button>
        </header>
        <section class="modal-card-body">
          <div class="container">
            <form @submit.prevent="close">
              <div class="field">
                <label class="label">Correo Electronico</label>
                <div class="control">
                  <input
                    v-model="email"
                    :class="{
                      'is-danger': $v.email.$anyError,
                    }"
                    class="input is-rounded"
                    type="email"
                    @input="delayTouch($v.email)"
                  />
                </div>
                <div
                  v-if="$v.email.$error && !$v.email.required"
                  class="help is-danger"
                >
                  El campo es obligatorio
                </div>
                <div
                  v-if="$v.email.$error && !$v.email.email"
                  class="help is-danger"
                >
                  El formato del correo electronico es invalido
                </div>
              </div>
              <div class="field">
                <label class="label">Contrasena</label>
                <div class="control is-centered">
                  <input
                    v-model="password"
                    :class="{ 'is-danger': $v.password.$anyError }"
                    class="input is-rounded"
                    type="password"
                    @input="delayTouch($v.password)"
                  />
                </div>
                <div
                  v-if="$v.password.$error && !$v.password.required"
                  class="help is-danger"
                >
                  El campo es obligatorio
                </div>
              </div>
            </form>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button :disabled="$v.$invalid" class="button is-success is-rounded">
            Ingresar
          </button>
          <button class="button is-success is-rounded" @click="login">
            Ingresar2
          </button>
          <button class="button is-rounded" @click="close">Cancelar</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { email, required } from 'vuelidate/lib/validators'
import { ValidationGroups } from 'vue/types/vue'
import { Validation } from 'vuelidate/vuelidate'
import { userStore } from '~/utils/store-accessor'

const touchMap = new WeakMap()

export default Vue.extend({
  name: 'UserLogin',
  props: {
    open: {
      type: Boolean,
    },
  },
  data() {
    return {
      name: '',
      lastName: '',
      birthDate: '',
      email: '',
      password: '',
    }
  },
  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
    },
  },
  computed: {
    isLogged() {
      return userStore.isLoggedIn
    },
  },
  watch: {
    isLogged(newValue) {
      if (newValue) {
        setTimeout(() => this.close(), 1000)
      }
    },
  },
  methods: {
    close() {
      this.$emit('close-login')
    },
    delayTouch($v: ValidationGroups & Validation) {
      $v.$reset()
      if (touchMap.has($v)) {
        clearTimeout(touchMap.get($v))
      }
      touchMap.set($v, setTimeout($v.$touch, 1000))
    },
    login() {
      userStore.startLogin(this.email, this.password)
    },
  },
})
</script>
