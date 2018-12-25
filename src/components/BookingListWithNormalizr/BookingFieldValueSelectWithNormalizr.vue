<template>
  <v-select
    class="BookingFieldValueSelectWithNormalizr"
    dense
    outline
    :items="bookingField.field.values"
    :label="bookingField.field.name"
    item-text="name"
    v-model="valueProxy"
    return-object
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Action } from 'vuex-class'
import { Booking, BookingField, FieldValue } from '../../bookingList'

@Component
export default class BookingFieldValueSelectWithNormalizr extends Vue {
  @Prop({ required: true }) bookingField!: BookingField
  @Prop({ required: true }) booking!: Booking
  @Action setBookingListBookingFieldValue!: Function

  set valueProxy (fieldValue: FieldValue | null) {
    this.setBookingListBookingFieldValue({
      bookingId: this.booking.id,
      fieldIndex: this.booking.bookingFields.indexOf(this.bookingField),
      fieldValueId: fieldValue ? fieldValue.id : null
    })
  }

  get valueProxy (): FieldValue | null {
    return this.bookingField.value
  }
}
</script>

<style lang="scss">
.BookingFieldValueSelectWithNormalizr {

}
</style>
