import {createStore, useStore} from 'vuex'
import {Agency, Property} from '@/Models/Models'
import axios from "axios";
import {onMounted, onBeforeMount} from "vue";

onBeforeMount(() => {useStore().state.agencies = [
  {
    "id": 2,
    "name": "Holt",
    "properties": [],
    "agents": []
  },
  {
    "id": 3,
    "name": "450",
    "properties": [],
    "agents": []
  },
  {
    "id": 4,
    "name": "íslandssalan",
    "properties": [],
    "agents": []
  }
]})

export default createStore({
  state: {
    agencies: [],
    onlineAgencies: undefined,
    properties: Array<Property>(),
    isAdmin: false
  },
  getters: {
    getAgencyState(state){
      useStore().state.agencies = [
        {
          "id": 2,
          "name": "Holt",
          "properties": [],
          "agents": []
        },
        {
          "id": 3,
          "name": "450",
          "properties": [],
          "agents": []
        },
        {
          "id": 4,
          "name": "íslandssalan",
          "properties": [],
          "agents": []
        }
      ]
    },
    getAgencies(state){/*
      const prufa = []
      for (let x = 0;state.agencies.length; x++){
        console.log(state.agencies[x].name)
        prufa.push(state.agencies[x].name)
      }
      console.log("prufa", prufa)*/
      return Array.from(state.agencies)
    }
  },
  mutations: {
  },
  actions: {
    getAgencies({state}){
      axios.get("http://localhost:7210/agency").then(
          response => state.onlineAgencies = response.data
      )
    },
    getProperty({state},payload){
      axios.get("http://localhost:7210/property/"+payload).then(
          response => state.properties += response.data
      )
    }
  },
  modules: {
  }
})
