<template>
  <v-layout class="BookingListItemWithoutNormalizr">
    <v-flex
      xs12
      v-for="bookingField in booking.bookingFields"
    >
      <booking-field-value-select-without-normalizr
        :bookingField="bookingField"
        :booking="booking"
      />
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Booking } from '../../bookingList'
import BookingFieldValueSelectWithoutNormalizr
  from './BookingFieldValueSelectWithoutNormalizr.vue'

@Component({
  components: { BookingFieldValueSelectWithoutNormalizr }
})
export default class BookingListItemWithoutNormalizr extends Vue {
  @Prop({ required: true }) booking!: Booking
}
</script>

<style lang="scss">
.BookingListItemWithoutNormalizr {

}
</style>
