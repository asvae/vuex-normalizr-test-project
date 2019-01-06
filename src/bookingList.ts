import { denormalize, normalize, schema } from 'normalizr'

export interface FieldValue {
  id: number
  name: string
}

export interface Field {
  id: number
  name: string
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
  { id: 1, name: 'Select 1', values: fieldValues },
  { id: 2, name: 'Select 2', values: fieldValues },
  { id: 3, name: 'Select 3', values: fieldValues }
] as Field[]

const uuid = () => Math.round(Math.random() * 1000000)

const getBookingFields = () => {
  return fields.map(
    field => ({
      id: uuid(),
      field: field,
      value: null
    })
  ) as BookingField[]
}

export const getBookingList = () => [
  { id: 100, bookingFields: getBookingFields() },
  { id: 101, bookingFields: getBookingFields() },
  { id: 102, bookingFields: getBookingFields() }
] as Booking[]



type Serializable = Object
const deepCopy = (data: Serializable) => JSON.parse(JSON.stringify(data))
const deepEQ = (obj1: Serializable, obj2: Serializable) =>
  JSON.stringify(obj1) === JSON.stringify(obj2)

const fieldValue = new schema.Entity('fieldValue')
const field = new schema.Entity('field', { values: [fieldValue] })

const bookingField = new schema.Entity('bookingField', { field: field })
const booking = new schema.Entity('booking', {
  bookingFields: [bookingField]
})
const bookings = new schema.Array(booking)

const initialData = deepCopy(getBookingList())
export const normalizedData = normalize(initialData, bookings)
console.log('normalizedData', normalizedData)



export const denormalizeData = data => denormalize(
  data.result,
  bookings,
  data.entities
)

export const dataJoinBooking = data => denormalize(
  data.result,
  new schema.Array(new schema.Entity('booking')),
  { booking: data.entities.booking }
)

export const bookingFieldIdJoinRest = (id, data) => denormalize(
  id,
  bookingField,
  data.entities
)


const denormalizedData = denormalizeData(normalizedData)
console.log('denormalizedData', denormalizedData)

console.assert(deepEQ(initialData, denormalizedData), 'Should revert normalization properly')
