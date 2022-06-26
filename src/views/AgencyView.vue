<template>
    <div>
        <v-container>
<!--            v-for="agency in this.$store.state.agencies"
            :key="agency"-->

            <v-select
                :items="agencies"
            >
              <agency-instance :agency="agency">
              </agency-instance>
            </v-select>
        </v-container>
    </div>
</template>


<script lang="ts">
import AgencyInstance from "@/components/AgencyInstance.vue";
import {computed, defineComponent } from "vue";
import {useStore} from "vuex";

export default defineComponent( {
  setup () {
    const store = useStore()
    return {
      agencies: computed(() => store.state.agencies)
    }
  },
  name: "AgencyView",
    components:{
        AgencyInstance
    },
});

</script>

<style>
</style>