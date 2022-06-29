<template>
  <v-app>
  <v-app-bar>

    <router-view to="/agencies"> Agencies </router-view>
    <v-btn
        @click="toggleTheme"
    >
      THEME
    </v-btn>
  </v-app-bar>
    <v-main>
      <router-view name="Agencies"/>
    </v-main>
    <v-footer
        class="myFooter"
    >
      <v-row>
        <v-col cols="4" >1</v-col>
        <v-col cols="4" >2</v-col>
        <v-col cols="4" >3</v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useTheme } from 'vuetify'

export default defineComponent({
  name: 'App',

  data () {
    return {
      //
      drawer: false
    }
  },
  setup () {
    const theme = useTheme()
    return {
      theme,
      toggleTheme: () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
      }
    }
})
</script>

<style scoped>
.myFooter{
  background-color: beige;
}
</style>