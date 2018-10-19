/*
|-------------------------------------------------------------------------------
| VUEX modules/unit.js
|-------------------------------------------------------------------------------
| The Vuex data store for the unit
*/

import UnitAPI from '../api/unit.js'; 

export const unit = {
    state: {
        units: [],
        unitsLoadStatus: 0,
        unit: {},
        unitLoadStatus: 0,
        unitPagination: {},
        addUnitLoadStatus: 0,
        addUnitResult: {},
        updateUnitLoadStatus: 0,
        updateUnitResult: {},
        deleteUnitLoadStatus: 0,
        deleteUnitResult: {}
    },
    actions: {
        loadUnits({commit}, data) {
            commit('setUnitsLoadStatus', 1);

            UnitAPI.getUnits(
                data.url
            ).then(function(response) {
                commit('setUnitsLoadStatus', 2);
                commit('setUnits', response.data.data);
                commit('setUnitPagination', {
                    meta: response.data.meta,
                    links: response.data.links
                });
            }).catch(function() {
                commit('setUnitsLoadStatus', 3);
                commit('setUnits', []);
            });
        },

        loadUnit({commit}, data) {
            commit('setUnitLoadStatus', 1);

            UnitAPI.getUnit(
                data.id
            ).then(function(response) {
                commit('setUnitLoadStatus', 2);
                commit('setUnit', response.data.data);
            }).catch(function() {
                commit('setUnitLoadStatus', 3);
                commit('setUnit', {});
            });
        },

        newUnit({commit}, data) {
            commit('setAddUnitLoadStatus', 1);

            UnitAPI.addUnit(
                data.name
            ).then(function(response) {
                commit('setAddUnitLoadStatus', 2);
                commit('setAddUnitResult', response.data);
            }).catch(function() {
                commit('setAddUnitLoadStatus', 3);
                commit('setAddUnitResult', {
                    success: 0,
                    message: 'Something went wrong. Try again!'
                });
            });
        },

        editUnit({commit}, data) {
            commit('setUpdateUnitLoadStatus', 1);

            UnitAPI.updateUnit(
                data.id,
                data.name
            ).then(function(response) {
                commit('setUpdateUnitLoadStatus', 2);
                commit('setUpdateUnitResult', response.data);
            }).catch(function() {
                commit('setUpdateUnitLoadStatus', 3);
                commit('setUpdateUnitResult', {
                    success: 0,
                    message: 'Something went wrong. Try again'
                });
            });
        },

        deleteUnit({commit}, data) {
            commit('setDeleteUnitLoadStatus', 1);

            UnitAPI.deleteUnit(
                data.id
            ).then(function(response) {
                commit('setDeleteUnitLoadStatus', 2);
                commit('setDeleteUnitResult', response.data);
            }).catch(function() {
                commit('setDeleteUnitLoadStatus', 3);
                commit('setDeleteUnitResult', {
                    success: 0,
                    message: 'Something went wrong. Try again'
                });
            });
        }
    },
    mutations: {
        setUnits(state, units) {
            state.units = units;
        }, 
        setUnitsLoadStatus(state, unitsLoadStatus) {
            state.unitsLoadStatus = unitsLoadStatus;
        },
        setUnit(state, unit) {
            state.unit = unit;
        },
        setUnitLoadStatus(state, status) {
            state.unitLoadStatus = status;
        },
        setUnitPagination(state, data) {
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
        
            state.unitPagination = pagination;
        },
        setAddUnitLoadStatus(state, status) {
            state.addUnitLoadStatus = status;
        }, 
        setAddUnitResult(state, result) {
            state.addUnitResult = result;
        },
        setUpdateUnitLoadStatus(state, status) {
            state.updateUnitLoadStatus = status;
        },
        setUpdateUnitResult(state, result) {
            state.updateUnitResult = result;
        },
        setDeleteUnitLoadStatus(state, status) {
            state.deleteUnitLoadStatus = status;
        },
        setDeleteUnitResult(state, result) {
            state.deleteUnitResult = result;
        }
    },
    getters: {
        getUnits(state) {
            return state.units;
        }, 
        getUnitsLoadStatus(state) {
            return state.unitsLoadStatus;
        },
        getUnit(state) {
            return state.unit;
        },
        getUnitLoadStatus(state) {
            return state.unitLoadStatus;
        },
        getUnitPagination(state) {
            return state.unitPagination;
        },
        getAddUnitLoadStatus(state) {
            return state.addUnitLoadStatus;
        }, 
        getAddUnitResult(state) {
            return state.addUnitResult;
        },
        getUpdateUnitLoadStatus(state) {
            return state.updateUnitLoadStatus;
        },
        getUpdateUnitResult(state) {
            return state.updateUnitResult;
        },
        getDeleteUnitLoadStatus(state) {
            return state.deleteUnitLoadStatus;
        },
        getDeleteUnitResult(state) {
            return state.deleteUnitResult;
        }
    }
};