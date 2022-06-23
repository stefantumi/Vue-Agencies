import { createStore } from 'vuex'
import { Property } from '@/Models/Models'
import axios from "axios";

export default createStore({
  state: {
    agencies:[
      {
        "id": 1,
        "name": "Remax",
        "properties": [
          {
            "id": 1,
            "address": {
              "id": 1,
              "street": "the street",
              "houseNo": 23,
              "zip": 23
            },
            "size": 233,
            "price": 23081232,
            "owner": null,
            "buyer": null
          },
          {
            "id": 2,
            "address": {
              "id": 2,
              "street": "C.Saffran",
              "houseNo": 32,
              "zip": 3456
            },
            "size": 233,
            "price": 76000000,
            "owner": null,
            "buyer": null
          },
          {
            "id": 3,
            "address": {
              "id": 3,
              "street": "C.Cardemomo",
              "houseNo": 1,
              "zip": 3456
            },
            "size": 143,
            "price": 76000000,
            "owner": null,
            "buyer": null
          },
          {
            "id": 4,
            "address": {
              "id": 4,
              "street": "C.Cardemomo",
              "houseNo": 2,
              "zip": 3456
            },
            "size": 143,
            "price": 76000000,
            "owner": null,
            "buyer": null
          },
          {
            "id": 5,
            "address": {
              "id": 5,
              "street": "C.Cardemomo",
              "houseNo": 3,
              "zip": 3456
            },
            "size": 143,
            "price": 76000000,
            "owner": null,
            "buyer": null
          },
          {
            "id": 6,
            "address": {
              "id": 8,
              "street": "C.Cardemomo3",
              "houseNo": 0,
              "zip": 345
            },
            "size": 143,
            "price": 73000000,
            "owner": null,
            "buyer": null
          },
          {
            "id": 7,
            "address": {
              "id": 7,
              "street": "423",
              "houseNo": 42334,
              "zip": 34
            },
            "size": 23,
            "price": 4343,
            "owner": null,
            "buyer": null
          },
          {
            "id": 8,
            "address": {
              "id": 9,
              "street": "Street Name",
              "houseNo": 32,
              "zip": 12
            },
            "size": 32,
            "price": 23,
            "owner": null,
            "buyer": null
          },
          {
            "id": 1009,
            "address": {
              "id": 1010,
              "street": "Street Name111",
              "houseNo": 5546,
              "zip": 4334
            },
            "size": 32,
            "price": 431,
            "owner": null,
            "buyer": null
          }
        ],
        "agents": [
          {
            "catalogue": [],
            "id": 1,
            "firstName": "Erik Snorri",
            "lastName": "Tumason",
            "ssid": "232323-1212"
          },
          {
            "catalogue": [],
            "id": 2,
            "firstName": "Baldur",
            "lastName": "Jezorski",
            "ssid": "230890-2222"
          },
          {
            "catalogue": [],
            "id": 3,
            "firstName": "Sigurður hjörtur",
            "lastName": "Þrastarson",
            "ssid": "232323-1212"
          },
          {
            "catalogue": [],
            "id": 4,
            "firstName": "Stefán Tumi",
            "lastName": "Þrastarson",
            "ssid": "230890-2121"
          }
        ]
      },
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
    ],
    onlineAgencies: undefined,
    properties: Array<Property>()
  },
  getters: {
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
