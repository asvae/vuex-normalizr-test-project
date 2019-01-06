<template>
  <div class="BookingListWithNormalizr">
    <v-expansion-panel>
      <v-expansion-panel-content
        v-for="booking in bookings"
        :key="booking.id"
      >
        <div slot="header">Booking #{{booking.id}}</div>
        <booking-list-item-with-normalizr
          :booking="booking"
        />
      </v-expansion-panel-content>
    </v-expansion-panel>
    <pre>{{ values }}</pre>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Getter } from 'vuex-class'
import { Booking } from '@/bookingList'

import BookingListItemWithNormalizr
  from './BookingListItemWithNormalizr.vue'

@Component({
  components: { BookingListItemWithNormalizr }
})
export default class BookingListWithNormalizr extends Vue {
  @Getter bookings
  @Getter bookingDenormalizedList
  @Getter bookingNormalizedList

  get values () {
    return this.bookingNormalizedList
  //  TODO: can not watch denormalized data - reactivity is lost
  //   return this.bookingDenormalizedList.map(booking => ({
  //     bookingId: booking.id,
  //     bookingFieldValues: booking.bookingFields.map(bookingField => bookingField.value && bookingField.value.name)
  //   }))
  }
}
</script>

<style lang="scss">
.BookingListWithNormalizr {

}
</style>
