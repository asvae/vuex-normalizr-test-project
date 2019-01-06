<template>
  <div class="BookingListWithObjects">
    <v-expansion-panel>
      <v-expansion-panel-content
        v-for="booking in bookings"
        :key="booking.id"
      >
        <div slot="header">Booking #{{booking.id}}</div>
        <BookingListItemWithObjects
          :booking="booking"
        />
      </v-expansion-panel-content>
    </v-expansion-panel>
    <pre>{{ values }}</pre>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Booking, getBookingList } from '@/bookingList'

import BookingListItemWithObjects
  from './BookingListItemWithObjects.vue'

@Component({
  components: { BookingListItemWithObjects }
})
export default class BookingListWithObjects extends Vue {
  bookings: Booking[] = getBookingList()

  get values () {
    return this.bookings.map((booking: Booking) => ({
      bookingId: booking.id,
      bookingFieldValues: booking.bookingFields.map(bookingField => bookingField.value ? bookingField.value.name : null)
    }))
  }
}
</script>

<style lang="scss">
.BookingListWithObjects {

}
</style>
