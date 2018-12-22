import Vue from 'vue'
import Router from 'vue-router'

const VueBook = require('vue-book').default

Vue.use(Router)

export default new Router({
  routes: [
    VueBook({
      requireContext: require.context('./..', true, /.demo.vue$/),
      path: '/',
      hideFileExtensions: true // optional, hides file extensions in list.
    })
  ]
})
