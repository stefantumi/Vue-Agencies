<template>
  <v-card
      class="cardStyle"
      elevation="8"
  >

    <v-card-title>
      {{property?.address.street }}
      {{property?.address.houseNo }}
    </v-card-title>
    <v-card-subtitle>
      <p>ID: {{property?.id.toString()}} </p> <p> " " </p><br> <p> Postcode: {{property?.address.zip }}</p>

    </v-card-subtitle>
    <v-card-text>
      Price: {{property?.price.toString()}}
      <br>
      Size: {{property?.size.toString()}}
    </v-card-text>
  </v-card>
</template>


<script lang="ts">
import  { defineComponent } from 'vue';
import { Property } from "@/Models/Models"

export default defineComponent({
    name: "PropertyInstance",
    props: {
        property:Property
    },
})

</script>

<style>
</style>