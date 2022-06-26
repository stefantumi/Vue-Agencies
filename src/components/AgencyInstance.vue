<template>
    <div>
        <v-card
            :title="agency.name"
            :subtitle="agency.id.toString()"
        >
          <v-main>
            <v-container
                fluid
            >
              <v-row
                  dense="1"
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
            <v-container
                fluid
            >
              <v-row
                  dense="1"
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

export default defineComponent({
    name: "AgencyInstance",
    components:{
      AgentInstance,
        PropertyInstanceVue
    },
    props: {
        agency: Agency
    }
})
</script>