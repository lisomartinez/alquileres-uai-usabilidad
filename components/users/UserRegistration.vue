<template>
  <div class="container">
    <div :class="{ 'is-active': open }" class="modal">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Registrate</p>
          <button aria-label="close" class="delete" @click="close"></button>
        </header>
        <section class="modal-card-body">
          <div v-if="!isRegistered" class="container">
            <form @submit.prevent="close">
              <div class="field">
                <label class="label">Nombre</label>
                <div class="control">
                  <input
                    v-model.trim="name"
                    :class="{
                      'is-danger': $v.name.$anyError,
                    }"
                    class="input is-rounded"
                    type="text"
                    @input="delayTouch($v.name)"
                  />
                </div>
                <div
                  v-if="$v.name.$error && !$v.name.required"
                  class="help is-danger"
                >
                  El campo es obligatorio
                </div>
                <div
                  v-if="$v.name.$error && !$v.name.minLength"
                  class="help is-danger"
                >
                  El nombre debe tener 2 letras como minimo
                </div>
              </div>
              <div class="field">
                <label class="label">Apellido</label>
                <div class="control">
                  <input
                    v-model="lastName"
                    :class="{
                      'is-danger': $v.lastName.$anyError,
                    }"
                    class="input is-rounded"
                    type="text"
                    @input="delayTouch($v.lastName)"
                  />
                </div>
                <div
                  v-if="$v.lastName.$error && !$v.lastName.required"
                  class="help is-danger"
                >
                  El campo es obligatorio
                </div>
                <div
                  v-if="$v.lastName.$error && !$v.lastName.minLength"
                  class="help is-danger"
                >
                  El apellido debe tener 2 letras como minimo
                </div>
              </div>
              <div class="field">
                <label class="label">Fecha de Nacimiento</label>
                <div class="control">
                  <input
                    v-model="birthDate"
                    class="input is-rounded"
                    :class="{ 'is-danger': $v.birthDate.$anyError }"
                    type="date"
                    @input="delayTouch($v.birthDate)"
                  />
                </div>
                <div
                  v-if="$v.birthDate.$error && !$v.birthDate.required"
                  class="help is-danger"
                >
                  El campo es obligatorio
                </div>
                <div
                  v-if="$v.birthDate.$error && !$v.birthDate.minValue"
                  class="help is-danger"
                >
                  Debe ser mayor de 18 anios.
                </div>
              </div>
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
                <div
                  v-if="$v.password.$error && !$v.password.minLength"
                  class="help is-danger"
                >
                  La contrasena debe contener 8 caracteres como minimo
                </div>
                <div
                  v-if="$v.password.$error && !$v.password.containsUppercase"
                  class="help is-danger"
                >
                  La contrasena debe contener al menos una letra mayuscula
                </div>

                <div
                  v-if="$v.password.$error && !$v.password.containsLowercase"
                  class="help is-danger"
                >
                  La contrasena debe contener al menos una letra minuscula
                </div>

                <div
                  v-if="$v.password.$error && !$v.password.containsNumber"
                  class="help is-danger"
                >
                  La contrasena debe contener al menos un numero
                </div>
              </div>
              <div class="field">
                <label class="checkbox">
                  <input type="checkbox" />
                  Para registrarse debe aceptar los<a href="#">
                    términos de uso y las políticas de privacidad
                  </a>
                </label>
              </div>
            </form>
          </div>
          <div v-else class="container w-1/2 h-1/2">
            <fa :icon="['fas', 'check-circle']" size="4x"></fa>
          </div>
        </section>
        <footer v-if="!isRegistered" class="modal-card-foot">
          <button :disabled="$v.$invalid" class="button is-success is-rounded">
            Registrarse
          </button>
          <button class="button is-success is-rounded" @click="register">
            Registrarse2
          </button>
          <button class="button is-rounded" @click="close">Cancelar</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { alpha, email, minLength, required } from 'vuelidate/lib/validators'
import { Validation } from 'vuelidate/vuelidate'
import { ValidationGroups } from 'vue/types/vue'
import { userStore } from '~/utils/store-accessor'

const touchMap = new WeakMap()

function isDate18orMoreYearsOld(
  day: number,
  month: number,
  year: number
): boolean {
  return new Date(year + 18, month - 1, day) <= new Date()
}

export default Vue.extend({
  name: 'UserRegistration',
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
    name: {
      required,
      minLength: minLength(2),
      alpha,
    },
    lastName: {
      required,
      minLength: minLength(2),
      alpha,
    },
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(8), // I assume you'd want something like this too
      containsUppercase(value) {
        return /[A-Z]/.test(value)
      },
      containsLowercase(value) {
        return /[a-z]/.test(value)
      },
      containsNumber(value) {
        return /[0-9]/.test(value)
      },
    },
    birthDate: {
      required,
      minValue: (value) => {
        const date: Date = new Date(value)
        const year = date.getFullYear()
        const month = date.getMonth()
        const day = date.getDay()
        return isDate18orMoreYearsOld(day, month, year)
      },
    },
  },
  computed: {
    isRegistered() {
      return userStore.isUserRegistered
    },
  },
  watch: {
    isRegistered(newValue) {
      if (newValue) {
        setTimeout(() => this.close(), 1000)
      }
    },
  },
  methods: {
    close() {
      this.$emit('close-registration')
    },
    delayTouch($v: ValidationGroups & Validation) {
      $v.$reset()
      if (touchMap.has($v)) {
        clearTimeout(touchMap.get($v))
      }
      touchMap.set($v, setTimeout($v.$touch, 1000))
    },
    register() {
      // this.$store.commit('userIsRegistered', true)
      userStore.startRegistration({
        name: this.name,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
        birthDate: this.birthDate,
      })
    },
  },
})
</script>

<style lang="scss" scoped>
.success-icon {
  font-size: 50px;
}
</style>
