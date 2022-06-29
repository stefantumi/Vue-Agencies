<template>
    <div>
        <v-container>
          <agency-instance
              v-for="agency in agencies"
              :key="agency"
              :agency="agency"
          >
          </agency-instance>
        </v-container>
    </div>
</template>


<script lang="ts">
import AgencyInstance from "@/components/AgencyInstance.vue";
import {computed, defineComponent } from "vue";
import {useStore} from "vuex";
import store from "@/store";

export default defineComponent( {
  setup () {
    const store = useStore()
    return {
      agencies: computed(() => store.state.agencies)
    }
  },
  mounted() {
    store.dispatch("setAgencies")
  },
  name: "AgencyView",
    components:{
        AgencyInstance
    },

});

</script>

<style>
</style>