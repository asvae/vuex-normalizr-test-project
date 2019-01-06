<template>
  <v-select
    class="BookingFieldValueSelectWithObjects"
    dense
    outline
    :items="bookingField.field.values"
    :label="bookingField.field.name"
    item-text="name"
    v-model="bookingField.value"
    return-object
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { BookingField } from '../../bookingList'

@Component
export default class BookingFieldValueSelectWithObjects extends Vue {
  @Prop({ required: true }) bookingField!: BookingField
}
</script>

<style lang="scss">
.BookingFieldValueSelectWithObjects {

}
</style>
