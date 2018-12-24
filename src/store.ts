import Vue from 'vue'
import Vuex from 'vuex'
import {
  Booking,
  BookingField,
  FieldValue,
  getBookingList
} from './bookingList'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    bookingList: getBookingList()
  },
  getters: {
    bookingList (state) {
      return state.bookingList
    }
  },
  mutations: {
    setBookingListBookingFieldValue: (state, { bookingId, fieldIndex, fieldValueId }) => {
      console.log('Updating field without normalizr', { bookingId, fieldIndex, fieldValueId })

      const booking = state.bookingList.find(
        booking => booking.id === bookingId
      ) as Booking
      const bookingField: BookingField = booking.bookingFields[fieldIndex]
      bookingField.value = fieldValueId ? bookingField.field.values.find(
        fieldValue => fieldValue.id === fieldValueId
      ) as FieldValue : null
    }
  },
  actions: {
    setBookingListBookingFieldValue (context, { bookingId, fieldIndex, fieldValueId }) {
      context.commit('setBookingListBookingFieldValue', { bookingId, fieldIndex, fieldValueId })
    }
  }
})
