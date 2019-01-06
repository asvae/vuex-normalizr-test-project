import Vue from 'vue'
import Router from 'vue-router'
import BookingListWithNormalizr from './components/BookingListWithNormalizr/BookingListWithNormalizr.vue'
import BookingListWithoutNormalizr from './components/BookingListWithoutNormalizr/BookingListWithoutNormalizr.vue'
import Navigation from './components/Navigation.vue'
import BookingListWithObjects
  from './components/BookingListWithObjects/BookingListWithObjects.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Navigation
    },
    {
      path: '/with-normalizr',
      component: BookingListWithNormalizr
    },
    {
      path: '/without-normalizr',
      component: BookingListWithoutNormalizr
    },
    {
      path: '/plain-objects',
      component: BookingListWithObjects
    }
  ]
})
