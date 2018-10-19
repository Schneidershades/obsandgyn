/*
|-------------------------------------------------------------------------------
| VUEX modules/inventoryType.js
|-------------------------------------------------------------------------------
| The Vuex data store for the inventoryType
*/

import InventoryTypeAPI from '../api/inventoryType.js'; 

export const inventoryType = {
    state: {
        inventoryTypes: [],
        inventoryTypesLoadStatus: 0
    },
    actions: {
        loadInventoryTypes({commit}) {
            commit('setInventoryTypesLoadStatus', 1);

            InventoryTypeAPI.getInventoryTypes(
                data.url
            ).then(function(response) {
                commit('setInventoryTypesLoadStatus', 2); 
                commit('setInventoryTypes', response.data.data);               
            }).catch(function() {
                commit('setInventoryTypesLoadStatus', 3);
                commit('setInventoryTypes', []);
            });
        }
    },
    mutations: {
        setInventoryTypes(state, inventoryTypes) {
            state.inventoryTypes = inventoryTypes;
        },
        setInventoryTypesLoadStatus(state, status) {
            state.inventoryTypesLoadStatus = status;
        }
    },
    getters: {
        getInventoryTypes(state) {
            return state.inventoryTypes;
        },
        getInventoryTypesLoadStatus(state) {
            return state.inventoryTypesLoadStatus;
        }
    }
};