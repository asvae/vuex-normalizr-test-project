<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <router-link
          to="/"
          class="font-weight-light"
        >
          Vuex + normalizr test project
        </router-link>
      </v-toolbar-title>
      <v-spacer/>
      <v-btn
        flat
        href="https://github.com/asvae/vuex-normalizr-test-project"
        target="_blank"
      >
        <span class="mr-2">See on github</span>
        <v-icon>fas fa-external-link-alt</v-icon>
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/Navigation'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      //
    }
  }
}
</script>
