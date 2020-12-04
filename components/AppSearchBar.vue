<template>
  <div class="container">
    <section class="section">
      <div class="container">
        <label class="label"> Lugar </label>
        <div class="is-flex is-flex-direction-row is-flex-wrap is-fullwidth">
          <div class="field has-addons is-fullwidth is-flex-grow-1 mb-4">
            <div class="control is-flex-grow-1">
              <autocomplete
                :search="search"
                placeholder="Buenos Aires..."
                aria-label="Search Wikipedia"
              ></autocomplete>
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
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'AppSearchBar',
  data() {
    return {
      cities: ['buenos aires', 'brasil'],
    }
  },
  computed: {
    today(): string {
      return new Date().toDateString()
    },
  },
  methods: {
    // Search function can return a promise
    // which resolves with an array of
    // results. In this case we're using
    // the Wikipedia search API.
    search(input: string) {
      // const url = `${wikiUrl}/w/api.php?${params}&srsearch=${encodeURI(input)}`

      return new Promise((resolve) => {
        if (input.length < 2) {
          return resolve([])
        }
        resolve(
          this.cities.filter((city) => city.startsWith(input.toLowerCase()))
        )
        //
        // fetch(url)
        //   .then((response) => response.json())
        //   .then((data) => {
        //     resolve(data.query.search)
        //   })
      })
    },
    // We want to display the title
    getResultValue(result: string) {
      return result
    },

    // Open the selected article in
    // a new window
    // onSubmit(result) {
    //   window.open(`${wikiUrl}/wiki/${encodeURI(result.title)}`)
    // },
  },
})
</script>

<!--<style lang="scss" scoped></style>-->
