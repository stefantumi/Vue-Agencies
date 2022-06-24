<template>
  <v-app>
  <v-app-bar>
    <router-view to="/agencies"> Agencies </router-view>
    <v-btn
        @click="switchMode()"
    >
      admin
    </v-btn>
  </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import store from '@/store/index'

export default defineComponent({
  name: 'App',

  data () {
    return {
      //
    }
  },
  methods:{
    switchMode(){
      console.log("befor", store.state.isAdmin)
      store.state.isAdmin = !store.state.isAdmin
      console.log("after", store.state.isAdmin)
    }
  }
})
</script>
