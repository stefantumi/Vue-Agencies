<template>
  <v-card>

    <div class="d-flex flex-row">
      <v-tabs
          v-model="tab"
          direction="vertical"
          color="primary"
          v-for="agency in agencies"
          :key="agency">


        <v-tab :value="agency">
          <v-icon start>
            mdi-account
          </v-icon>
          Option 1
        </v-tab>

      <v-window v-model="tab">
        <v-window-item :value="agency">
          <v-card flat>
            {{ agency.name }}
            <agency-instance :agency="agencies"></agency-instance>
            <!--            <v-card-text>
              <p>
                Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
              </p>

              <p>
                Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Aliquam lobortis. Aliquam lobortis. Suspendisse non nisl sit amet velit hendrerit rutrum.
              </p>

              <p class="mb-0">
                Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio.
              </p>
            </v-card-text>-->
          </v-card>
        </v-window-item>

      </v-window>
      </v-tabs>
    </div>
  </v-card>
</template>

<script>
import axios from "axios";
import store from "@/store";
import agencyInstance from "@/components/AgencyInstance";

export default {
  components: {
    agencyInstance
  },

  data: () => ({
    tab: 'option-1',
  }),
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
  mounted() {
    this.getAgencies()
  },
  computed:{
    agencies() {
      return this.$store.state.agencies
    }
  }
}
</script>