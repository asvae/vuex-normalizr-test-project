import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export interface FieldValue {
  id: number
  name: string
}

export interface Field {
  id: number
  values: FieldValue[]
}

export interface BookingField {
  id: number
  field: Field
  value: FieldValue | null
}

export interface Booking {
  id: number
  bookingFields: BookingField[]
}

const fieldValues = [
  { id: 1, name: 'one' },
  { id: 2, name: 'two' },
  { id: 3, name: 'three' }
] as FieldValue[]

const fields = [
  { id: 1, values: fieldValues },
  { id: 2, values: fieldValues },
  { id: 3, values: fieldValues }
] as Field[]

const bookingFields = fields.map(
  field => ({
    id: field.id,
    field: field,
    value: null
  })
) as BookingField[]

export default new Vuex.Store({
  state: {
    bookingList: [
      { id: 100, bookingFields },
      { id: 101, bookingFields },
      { id: 102, bookingFields }
    ] as Booking[]
  },
  mutations: {},
  actions: {}
})
