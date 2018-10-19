/*
|-------------------------------------------------------------------------------
| VUEX modules/inventory.js
|-------------------------------------------------------------------------------
| The Vuex data store for the inventory
*/

import InventoryAPI from '../api/inventory.js'; 

export const inventory = {
    state: {
        inventories: [],
        inventoriesLoadStatus: 0,
        inventory: {},
        inventoryLoadStatus: 0,
        inventoryPagination: {},
        addInventoryLoadStatus: 0,
        addInventoryResult: {},
        updateInventoryLoadStatus: 0,
        updateInventoryResult: {},
        deleteInventoryLoadStatus: 0,
        deleteInventoryResult: {}
    },
    actions: {
        loadInventories({commit}, data) {
            commit('setInventoriesLoadStatus', 1);

            InventoryAPI.getInventories(
                data.url
            ).then(function(response) {
                commit('setInventoriesLoadStatus', 2);
                commit('setInventories', response.data.data);
                commit('setInventoryPagination', {
                    meta: response.data.meta,
                    links: response.data.links
                });
            }).catch(function() {
                commit('setInventoriesLoadStatus', 3);
                commit('setInventories', []);
            });
        },

        loadInventory({commit}, data) {
            commit('setInventoryLoadStatus', 1);

            InventoryAPI.getInventory(
                data.id
            ).then(function(response) {
                commit('setInventoryLoadStatus', 2);
                commit('setInventory', response.data.data);
            }).catch(function() {
                commit('setInventoryLoadStatus', 3);
                commit('setInventory', {});
            })
        },

        newInventory({commit}, data) {
            commit('setAddInventoryLoadStatus', 1);

            InventoryAPI.addInventory(
                data.name,
                data.inventory_type_id,
                data.quantity,
                data.unit_id,
                data.price,
                data.expiration
            ).then(function(response) {
                commit('setAddInventoryLoadStatus', 2);
                commit('setAddInventoryResult', response.data);
            }).catch(function() {
                commit('setAddInventoryLoadStatus', 3);
                commit('setAddInventoryResult', {
                    success: 0,
                    message: 'Something went wrong. Try again.'
                });
            });
        },

        editInventory({commit}, data) {
            commit('setUpdateInventoryLoadStatus', 1);

            InventoryAPI.updateInventory(
                data.id,
                data.name,
                data.inventory_type_id,
                data.quantity,
                data.unit_id,
                data.price,
                data.expiration
            ).then(function(response) {
                commit('setUpdateInventoryLoadStatus', 2);
                commit('setUpdateInventoryResult', response.data);
            }).catch(function() {
                commit('setUpdateInventoryLoadStatus', 3);
                commit('setUpdateInventoryResult', {
                    success: 0,
                    message: 'Something went wrong. Try again.'
                });
            });
        },

        removeInventory({commit}, data) {
            commit('setDeleteInventoryLoadStatus', 1);

            InventoryAPI.deleteInventory(
                data.id
            ).then(function(response) {
                commit('setDeleteInventoryLoadStatus', 2);
                commit('setDeleteInventoryResult', response.data);
            }).catch(function() {
                commit('setDeleteInventoryLoadStatus', 3);
                commit('setDeleteInventoryResult', {
                    success: 0, 
                    message: 'Something went wrong. Try again.'
                });
            });
        }
    },
    mutations: {
        setInventories(state, inventories) {
            state.inventories = inventories;
        },
        setInventoriesLoadStatus(state, status) {
            state.inventoriesLoadStatus = status;
        },
        setInventory(state, inventory) {
            state.inventory =  inventory;
        },
        setInventoryLoadStatus(state, status) {
            state.inventoryLoadStatus = status;
        },
        setInventoryPagination(state, data) {
            let meta = data.meta;
            let links = data.links;

            let pagination = {
                current_page: meta.current_page,
                last_page: meta.last_page,
                to: meta.to,
                total: meta.total,
                next_page_url: links.next,
                prev_page_url: links.prev
            };
        
            state.inventoryPagination = pagination;
        },
        setAddInventoryLoadStatus(state, status) {
            state.addInventoryLoadStatus = status;
        },
        setAddInventoryResult(state, result) {
            state.addInventoryResult = result;
        },
        setUpdateInventoryLoadStatus(state, status) {
            state.updateInventoryLoadStatus = status;
        },
        setUpdateInventoryResult(state, result) {
            state.updateInventoryResult = result;
        },
        setDeleteInventoryLoadStatus(state, status) {
            state.deleteInventoryLoadStatus = status;
        },
        setDeleteInventoryResult(state, result) {
            state.deleteInventoryResult = result;
        }
    },
    getters: {
        getInventories(state) {
            return state.inventories;
        },
        getInventoriesLoadStatus(state) {
            return state.inventoriesLoadStatus;
        },
        getInventory(state) {
            return state.inventory;
        },
        getInventoryLoadStatus(state) {
            return state.inventoryLoadStatus;
        },
        getInventoryPagination(state) {
            return state.inventoryPagination;
        },
        getAddInventoryLoadStatus(state) {
            return state.addInventoryLoadStatus;
        },
        getAddInventoryResult(state) {
            return state.addInventoryResult;
        },
        getUpdateInventoryLoadStatus(state) {
            return state.updateInventoryLoadStatus;
        },
        getUpdateInventoryResult(state) {
            return state.updateInventoryResult;
        },
        getDeleteInventoryLoadStatus(state) {
            return state.deleteInventoryLoadStatus;
        },
        getDeleteInventoryResult(state) {
            return state.deleteInventoryResult;
        }
    }
};