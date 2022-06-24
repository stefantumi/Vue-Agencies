<template>
    <div>
        <v-card
        >
          <v-row>
            <v-card-title>
              {{ agency.name }}
            </v-card-title>
            <v-icon
                icon="mdi-delete"
                @click="deleteAgency(agency.id - 1)"
            >
            </v-icon>
          </v-row>
          <v-card-subtitle>
            {{ agency.id.toString() }}
          </v-card-subtitle>
          <v-main>
<!--            <v-autocomplete
                v-model="model"
                :hint="!isEditing ? 'Click the icon to edit' : 'Click the icon to save'"
                :items="agencieList"
                :readonly="!isEditing"
                :label="`State — ${isEditing ? 'Editable' : 'Readonly'}`"
                persistent-hint
                prepend-icon="mdi-city"
            >
              <template v-slot:append-outer>
                <v-slide-x-reverse-transition
                    mode="out-in"
                >
                  <v-icon
                      :key="`icon-${isEditing}`"
                      :color="isEditing ? 'success' : 'info'"
                      @click="isEditing = !isEditing"
                      v-text="isEditing ? 'mdi-check-outline' : 'mdi-circle-edit-outline'"
                  ></v-icon>
                </v-slide-x-reverse-transition>
              </template>
            </v-autocomplete>-->
            <v-container
                fluid
            >
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
            <v-container
                fluid
            >
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
import store from "@/store/index";

export default defineComponent({
    name: "AgencyInstance",
    components:{
      AgentInstance,
        PropertyInstanceVue
    },
    data: () => {
      return {
        isEditing: false,
        model: null,
        states: undefined
        /*[
          'Alabama', 'Alaska', 'American Samoa', 'Arizona',
          'Arkansas', 'California', 'Colorado', 'Connecticut',
          'Delaware', 'District of Columbia', 'Federated States of Micronesia',
          'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
          'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
          'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
          'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
          'Missouri', 'Montana', 'Nebraska', 'Nevada',
          'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
          'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
          'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
          'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
          'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
          'Washington', 'West Virginia', 'Wisconsin', 'Wyoming',
        ],*/
      }
    },
    methods:{
      deleteAgency(index: number){
        store.state.agencies.slice(index)
        this.$router.go(0)
      }
    },
    props: {
        agency: Agency
    },
})
</script>