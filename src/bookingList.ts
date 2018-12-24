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


const getBookingFields = () => {
  return fields.map(
    field => ({
      id: field.id,
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
