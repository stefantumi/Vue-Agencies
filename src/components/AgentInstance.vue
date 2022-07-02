<template>
  <div>
    <v-card
        class="cardStyle"
        elevation="8"
        :title="agent.id.toString()"
        :subtitle="agent.ssid"
        :text="agent.firstName + ' ' + agent.lastName"
    >
      <v-divider></v-divider>
    </v-card>
  </div>
</template>


<script lang="ts">
import  { defineComponent } from 'vue';
import { Agent } from "@/Models/Models"

export default defineComponent({
  name: "AgentInstance",
  props: {
    agent: Agent
  }
})

</script>

<style>

</style>