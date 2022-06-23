<template>
    <div>
        <v-container
            v-for="agency in this.$store.state.agencies"
            :key="agency"
        >
            <agency-instance :agency="agency">
            </agency-instance>
        </v-container>
    </div>
</template>


<script lang="ts">
import AgencyInstance from "@/components/AgencyInstance.vue";
import { defineComponent } from "vue";

export default defineComponent( {
    name: "AgencyView",
    components:{
        AgencyInstance
        
    }
});

</script>

<style>
</style>