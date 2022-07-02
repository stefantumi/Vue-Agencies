import { createStore } from 'vuex'
import {Property} from '@/Models/Models'
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
      axios.get("http://localhost:7210/api/agency").then(
          response => {
            console.log("data",response.data)
            return response.data
          }
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
      state.agent = payload
    },
    REMOVE_PROPERTY(state,payload){
      state.statuscode = payload
    },
  },
  actions: {
    setAgencies({commit},payload){
      commit('SET_AGENCIES',payload)
    },
    setProperty({commit},payload){
      commit('SET_PROPERTY',payload)
      /*axios.get("http://localhost:7210/api/property").then(
          response => commit('SET_PROPERTY', response.data)
      )*/
    },
    setAgent({commit},payload){
      commit('SET_AGENT',payload)
      /*axios.get("https://localhost:7210/api/agent").then(
          response => commit('SET_AGENT',response.data)
      )*/
    },
    removeAgency({commit}, payload){
      axios.delete("https://localhost:7210/api/agency/"+payload ).then(
          response => commit('REMOVE_PROPERTY', response.status)
      )
    },
  },
  modules: {
  }
})


