import Vue from 'vue'
import Vuex from 'vuex'
import {
  Booking,
  BookingField, bookingFieldIdJoinRest, dataJoinBooking, denormalizeData,
  FieldValue,
  getBookingList, normalizedData
} from './bookingList'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bookingList: getBookingList(),
    bookingNormalizedList: normalizedData
  },
  getters: {
    bookingList (state) {
      return state.bookingList
    },
    bookingDenormalizedList (state) {
      const data = denormalizeData(state.bookingNormalizedList)
      console.log('denormalized data', data)

      return data
    },
    bookingNormalizedList (state) {
      return state.bookingNormalizedList
    },
    bookings (state) {
      return dataJoinBooking(state.bookingNormalizedList)
    },
    bookingFieldIdJoinRest (state) {
      return (bookingFieldId: number) => bookingFieldIdJoinRest(bookingFieldId, state.bookingNormalizedList)
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
    },
    setBookingListBookingFieldValueFlat: (state, { bookingFieldId, newValue }) => {
      console.log('Updating field with normalizr', { bookingFieldId, newValue })

      console.log('state.bookingNormalizedList.entities.bookingField[bookingFieldId]', state.bookingNormalizedList.entities.bookingField[bookingFieldId])
      console.log('newValue', newValue)
      state.bookingNormalizedList.entities.bookingField[bookingFieldId].value = newValue
    }
  },
  actions: {
    setBookingListBookingFieldValue (context, { bookingId, fieldIndex, fieldValueId }) {
      context.commit('setBookingListBookingFieldValue', { bookingId, fieldIndex, fieldValueId })
    },
    setBookingListBookingFieldValueFlat (context, data) {
      context.commit('setBookingListBookingFieldValueFlat', data)
    }
  }
})
