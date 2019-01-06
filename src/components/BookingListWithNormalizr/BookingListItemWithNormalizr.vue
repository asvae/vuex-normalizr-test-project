<template>
  <v-layout class="BookingListItemWithoutNormalizr">
    <v-flex
      xs12
      v-for="bookingFieldId in booking.bookingFields"
      :key="bookingFieldId"
    >
      <booking-field-value-select-with-normalizr
        :bookingFieldId="bookingFieldId"
      />
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Booking } from '../../bookingList'
import BookingFieldValueSelectWithNormalizr
  from './BookingFieldValueSelectWithNormalizr.vue'

@Component({
  components: { BookingFieldValueSelectWithNormalizr }
})
export default class BookingListItemWithNormalizr extends Vue {
  @Prop({ required: true }) booking!: Booking
}
</script>

<style lang="scss">
.BookingListItemWithoutNormalizr {

}
</style>
