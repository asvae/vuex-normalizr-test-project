<template>
  <div class="BookingListWithoutNormalizr">
    <v-expansion-panel>
      <v-expansion-panel-content
        v-for="booking in bookingList"
        :key="booking.id"
      >
        <div slot="header">Booking #{{booking.id}}</div>
        <booking-list-item-without-normalizr
          :booking="booking"
        />
      </v-expansion-panel-content>
    </v-expansion-panel>
    <pre>{{ values }}</pre>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import BookingListItemWithoutNormalizr
  from './BookingListItemWithoutNormalizr.vue'

import { Getter } from 'vuex-class'
import { Booking } from '@/bookingList'

@Component({
  components: { BookingListItemWithoutNormalizr }
})
export default class BookingListWithoutNormalizr extends Vue {
  @Getter bookingList !: Booking[]

  mounted () {
    console.log(this.bookingList)
  }

  get values () {
    return this.bookingList.map(booking => ({
      bookingId: booking.id,
      bookingFieldValues: booking.bookingFields.map(bookingField => bookingField.value && bookingField.value.name)
    }))
  }
}
</script>

<style lang="scss">
.BookingListWithoutNormalizr {

}
</style>
