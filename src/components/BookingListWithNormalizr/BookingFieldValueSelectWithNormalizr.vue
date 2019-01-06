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
import { Action, Getter } from 'vuex-class'
import { FieldValue } from '../../bookingList'

@Component
export default class BookingFieldValueSelectWithNormalizr extends Vue {
  @Prop({ required: true }) bookingFieldId!: number
  @Action setBookingListBookingFieldValueFlat!: Function
  @Getter bookingFieldIdJoinRest!: any

  set valueProxy (fieldValue: FieldValue | null) {
    this.setBookingListBookingFieldValueFlat({
      bookingFieldId: this.bookingFieldId,
      newValue: fieldValue ? fieldValue.name : null
    })
  }

  get bookingField () {
    return this.bookingFieldIdJoinRest(this.bookingFieldId)
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
