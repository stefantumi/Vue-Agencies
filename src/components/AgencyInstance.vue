<template>
    <div>

        <v-card class="agency" >
          <v-row>
            <v-card-title>
              {{ agency.name }}
            </v-card-title>
            <v-icon
                icon="mdi-delete"
                @click="deleteAgency(agency)"
            >
            </v-icon>
          </v-row>

          <v-card-subtitle>
            {{ agency.id.toString() }}
          </v-card-subtitle>

          <v-main>
            <v-container fluid >
              <v-row
                  dense
                  class="d-inline-block v-col-6 "
                  v-for="property in agency.properties"
                  :key="property.id"
              >
                <property-instance-vue :property="property"></property-instance-vue>
              </v-row>
            </v-container>
          </v-main>

          <br>

          <v-divider></v-divider>

          <v-main>
            <v-container fluid >
              <v-row
                  dense
                  class="d-inline-block v-col-6 "
                  v-for="agent in agency.agents"
                  :key="agent.id"
              >
                <agent-instance :agent="agent"></agent-instance>
              </v-row>
            </v-container>
          </v-main>

        </v-card>

    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Agency } from "@/Models/Models"
import PropertyInstanceVue from "./PropertyInstance.vue";
import AgentInstance from "@/components/AgentInstance.vue";
import store from "@/store";
/*
import store from "@/store/index";
*/

export default defineComponent({
    name: "AgencyInstance",
    components:{
      AgentInstance,
      PropertyInstanceVue
    },
    data: () => {
      return {
      }
    },
    methods:{
      deleteAgency(agency: Agency){
        store.dispatch('reomveAgency',agency )
        this.$router.go(0)
      }
    },
    props: {
        agency: Agency
    },
})
</script>

<style>
.agency{
  padding: 20px;
  margin: 20px
}
</style>