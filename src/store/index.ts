import { createStore } from 'vuex'
import {Agency, Property} from '@/Models/Models'
import axios from "axios";

export default createStore({
  strict: true,
  state: {
    serverHost: "https://localhost:7210",
    agencies:undefined,
    agent: undefined,
    onlineAgencies: undefined,
    statuscode: undefined,
    properties: Array<Property>()
  },
  getters: {
    allAgencies:() => {
      axios.get("https://localhost:7210/api/agency").then(
          response => response.data
      )
    }
  },
  mutations: {
    SET_AGENCIES(state,payload){
      state.agencies = payload
    },
    SET_PROPERTY(state,payload){
      state.agencies = payload
    },
    SET_AGENT(state,payload){
      state.agencies = payload
    },
    REMOVE_PROPERTY(state,payload){
      state.statuscode = payload
    },
  },
  actions: {
    setAgencies({commit}){
      axios.get("http://localhost:7210/api/agency").then(
          response => commit('SET_AGENCIES',response.data)
      )
    },
    setProperty({commit}){
      axios.get("http://localhost:7210/api/property").then(
          response => commit('SET_PROPERTY', response.data)
      )
    },
    setAgent({commit}){
      axios.get("https://localhost:7210/api/agent").then(
          response => commit('SET_AGENT',response.data)
      )
    },
    reomveAgency({commit}, payload: Agency){
      axios.putForm("https://localhost:7210/api/agency", payload).then(
          response => commit('REMOVE_PROPERTY', response.status)
      )
    }
  },
  modules: {
  }
})


