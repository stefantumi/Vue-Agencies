<template>
  <v-icon
      icon="mdi-delete"
      color="red"
      @click="deleteAgency(agency.id)"
  >

  </v-icon>
</template>

<script>
import axios from "axios";
import {Agency} from "@/Models/Models";

export default {
  name: "DeleteAgency",
  props: {
    Agency
  },
  data: () => {
    return {
      statusCode: undefined
    }
  },
  methods:{
    deleteAgency(id){
      axios.delete(this.$store.state.serverHost+ "/api/agency/" + id).then(
          response =>  this.statusCode = response.status
      )
    }
  }
}
</script>