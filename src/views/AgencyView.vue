<template>
    <div>
        <v-container>
          <agency-instance
              v-for="agency in this.$store.state.agencies"
              :key="agency"
              :agency="agency"
          >
          </agency-instance>
        </v-container>
    </div>
</template>


<script lang="ts">
import AgencyInstance from "@/components/AgencyInstance.vue";
import {defineComponent} from "vue";
import axios from "axios";
import store from "@/store";

export default defineComponent( {
  name: "AgencyView",
    components:{
        AgencyInstance
    },
  methods:{
    getAgencies(){
      axios.get("https://localhost:7210/api/agency").then(
          response => {
            console.log("data is here",response.data)
            store.dispatch('setAgencies', response.data)
          }
      )
    }
  },
  mounted(){
    this.getAgencies()
  }
});

</script>

<style>

</style>