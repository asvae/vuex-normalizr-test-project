<template>
  <v-layout class="BookingListItemWithObjects">
    <v-flex
      xs12
      v-for="bookingField in booking.bookingFields"
      :key="bookingField.id"
    >
      <BookingFieldValueSelectWithObjects
        :bookingField="bookingField"
      />
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Booking } from '../../bookingList'
import BookingFieldValueSelectWithObjects
  from './BookingFieldValueSelectWithObjects.vue'

@Component({
  components: { BookingFieldValueSelectWithObjects }
})
export default class BookingListItemWithObjects extends Vue {
  @Prop({ required: true }) booking!: Booking
}
</script>

<style lang="scss">
.BookingListItemWithObjects {

}
</style>
