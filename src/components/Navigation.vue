<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          Handling deep nesting in Vuex
        </h1>
        <p class="subheading font-weight-regular">
          [TODO Couple of words on the subject]
        </p>
      </v-flex>

      <v-flex mb-5 xs12>
        <h2 class="headline font-weight-bold mb-3">Bare Vuex</h2>
        <v-layout justify-center>
          <router-link
            to="without-normalizr"
            class="subheading mx-3"
          >
            See demo
          </router-link>
        </v-layout>
      </v-flex>

      <v-flex xs12 mb-5>
        <h2 class="headline font-weight-bold mb-3">Vuex + Normalizr</h2>
        <v-layout justify-center>
          <router-link
            to="with-normalizr"
            class="subheading mx-3"
          >
            See demo
          </router-link>
        </v-layout>
      </v-flex>

      <v-flex xs12 mb-5>
        <h2 class="headline font-weight-bold mb-3">Plain objects</h2>
        <v-layout justify-center>
          <router-link
            to="plain-objects"
            class="subheading mx-3"
          >
            See demo
          </router-link>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Navigation extends Vue {

}
</script>

<style>

</style>
