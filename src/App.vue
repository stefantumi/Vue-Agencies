<template>
  <v-app>
  <v-app-bar>
    <router-view to="/agencies"> Agencies </router-view>
  </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',

  data () {
    return {
      //
    }
  },
})
</script>
