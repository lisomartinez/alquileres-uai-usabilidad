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
          <div class="container">
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
                  Field is required
                </div>
                <div
                  v-if="$v.name.$error && !$v.name.minLength"
                  class="help is-danger"
                >
                  Minimo 2 letras
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
                  Field is required
                </div>
                <div
                  v-if="$v.lastName.$error && !$v.lastName.minLength"
                  class="help is-danger"
                >
                  Minimo 2 letras
                </div>
              </div>
              <div class="field">
                <label class="label">Fecha de Nacimiento</label>
                <div class="control">
                  <input class="input is-rounded" type="date" />
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
                  Field is required
                </div>
                <div
                  v-if="$v.email.$error && !$v.email.email"
                  class="help is-danger"
                >
                  formato invalido
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
                  Field is required
                </div>
                <div
                  v-if="$v.password.$error && !$v.password.minLength"
                  class="help is-danger"
                >
                  Minimo de 8 caracteres
                </div>
                <div
                  v-if="$v.password.$error && !$v.password.containsUppercase"
                  class="help is-danger"
                >
                  should contains uppercase
                </div>

                <div
                  v-if="$v.password.$error && !$v.password.containsLowercase"
                  class="help is-danger"
                >
                  should contains lowercase
                </div>

                <div
                  v-if="$v.password.$error && !$v.password.containsNumber"
                  class="help is-danger"
                >
                  should contains numbers
                </div>
              </div>
            </form>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button :disabled="$v.$invalid" class="button is-success is-rounded">
            Save changes
          </button>
          <button class="button is-rounded" @click="close">Cancel</button>
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

const touchMap = new WeakMap()

export default Vue.extend({
  name: 'UserRegistration',
  props: {
    open: {
      type: Boolean
    }
  },
  data() {
    return {
      name: '',
      lastName: '',
      birthDate: '',
      email: '',
      password: ''
    }
  },
  validations: {
    name: {
      required,
      minLength: minLength(2),
      alpha
    },
    lastName: {
      required,
      minLength: minLength(2),
      alpha
    },
    email: {
      required,
      email
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
      }
    }
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
    }
  }
})
</script>
