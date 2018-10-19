/*
|-------------------------------------------------------------------------------
| VUEX modules/charge.js
|-------------------------------------------------------------------------------
| The Vuex data store for the charge
*/

import ChargeAPI from '../api/charge.js'; 

export const charge = {
    state: {
        charges: [],
        chargesLoadStatus: 0,
        charge: {},
        chargeLoadStatus: 0,
        chargePagination: {},
        addChargeLoadStatus: 0,
        addChargeResult: {},
        updateChargeLoadStatus: 0,
        updateChargeResult: {},
        deleteChargeLoadStatus: 0,
        deleteChargeResult: {}
    },
    actions: {
        loadCharges({commit}, data) {
            commit('setChargesLoadStatus', 1);

            ChargeAPI.getCharges(
                data.visit_id
            ).then(function(response) {
                commit('setChargesLoadStatus', 2);
                commit('setCharges', response.data.data);
            }).catch(function() {
                commit('setChargesLoadStatus', 3);
                commit('setCharges', []);
            });
        },

        loadCharge({commit}, data) {
            commit('setChargeLoadStatus', 1);

            ChargeAPI.getCharge(
                data.id
            ).then(function(response) {
                commit('setChargeLoadStatus', 2);
                commit('setCharges', response.data.data);
            }).catch(function() {
                commit('setChargeLoadStatus', 3);
                commit('setCharge', {});
            });
        },

        newCharge() {
            commit('setAddChargeLoadStatus', 1);

            ChargeAPI.addCharges(
                data.visit_id,
                data.item,
                data.quantity
            ).then(function(response) {
                commit('setAddChargeLoadStatus', 2);
                commit('setAddChargeResult', response.data);
            }).catch(function() {
                commit('setAddChargeLoadStatus', 3);
                commit('setAddChargeResult', {
                    success: 0,
                    message: 'Something went wrong. Try again.'
                });
            });
        },

        editCharge() {
            commit('setUpdateChargeLoadStatus', 1);

            ChargeAPI.updateCharges(
                data.id,
                data.item,
                data.quantity
            ).then(function(response) {
                commit('setUpdateChargeLoadStatus', 2);
                commit('setUpdateChargeResult', response.data);
            }).catch(function() {
                commit('setUpdateChargeLoadStatus', 3);
                commit('setUpdateChargeResult', {
                    success: 0,
                    message: 'Something went wrong. Try again.'
                });
            });
        },

        removeCharge() {
            commit('setDeleteChargeLoadStatus', 1);

            ChargeAPI.deleteCharges(
                data.id
            ).then(function(response) {
                commit('setDeleteChargeLoadStatus', 2);
                commit('setDeleteChargeResult', response.data);
            }).catch(function() {
                commit('setDeleteChargeLoadStatus', 3);
                commit('setDeleteChargeResult', {
                    success: 0,
                    message: 'Something went wrong. Try again.'
                });
            });
        }
    },
    mutations: {
        setCharges(state, charges) {
            state.charges = charges;
        },
        setChargesLoadStatus(state, status) {
            state.chargesLoadStatus = status;
        },
        setCharge(state, charge) {
            state.charge = charge;
        },
        setChargeLoadStatus(state, status) {
            state.chargeLoadStatus = status;
        },
        setChargePagination(state, data) {
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
        
            state.chargePagination = pagination;
        },
        setAddChargeLoadStatus(state, status) {
            state.addChargeLoadStatus = status;
        },
        setAddChargeResult(state, result) {
            state.addChargeResult = result;
        },
        setUpdateChargeLoadStatus(state, status) {
            state.updateChargeLoadStatus = status;
        },
        setUpdateChargeResult(state, result) {
            state.updateChargeResult = result;
        },
        setDeleteChargeLoadStatus(state, status) {
            state.deleteChargeLoadStatus = status;
        },
        setDeleteChargeResult(state, result) {
            state.deleteChargeResult = result;
        }
    },
    getters: {
        getCharges(state) {
            return state.charges;
        },
        getChargesLoadStatus(state) {
            return state.chargesLoadStatus;
        },
        getCharge(state) {
            return state.charge;
        },
        getChargeLoadStatus(state) {
            return state.chargeLoadStatus;
        },
        getChargePagination(state) {
            return state.chargePagination;
        },
        getAddChargeLoadStatus(state) {
            return state.addChargeLoadStatus;
        },
        getAddChargeResult(state) {
            return state.addChargeResult;
        },
        getUpdateChargeLoadStatus(state) {
            return state.updateChargeLoadStatus;
        },
        getUpdateChargeResult(state) {
            return state.updateChargeResult;
        },
        getDeleteChargeLoadStatus(state) {
            return state.deleteChargeLoadStatus;
        },
        getDeleteChargeResult(state) {
            return state.deleteChargeResult;
        }
    }
};