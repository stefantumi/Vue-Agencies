<template>
  <div>
    <v-card
        class="agent"
        :title="agent.id.toString()"
        :subtitle="agent.ssid"
        :text="agent.firstName + ' ' + agent.lastName"
    >
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
.agent{
  background-color: beige;
  border-radius: 8px;
  border: 1px solid black;
}
</style>