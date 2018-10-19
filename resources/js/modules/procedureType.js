/*
|-------------------------------------------------------------------------------
| VUEX modules/procedureType.js
|-------------------------------------------------------------------------------
| The Vuex data store for the procedureType
*/

import ProcedureTypeAPI from '../api/procedureType.js'; 

export const procedureType = {
    state: {
        procedureTypes: [],
        procedureTypesLoadStatus: 0,
        procedureType: {},
        procedureTypeLoadStatus: 0,
        procedureTypePagination: {},
        addProcedureTypeTypeLoadStatus: 0,
        addProcedureTypeTypeResult: {},
        updateProcedureTypeTypeLoadStatus: 0,
        updateProcedureTypeTypeResult: {},
        deleteProcedureTypeTypeLoadStatus: 0,
        deleteProcedureTypeTypeResult: {}
    },
    actions: {
        loadProcedureTypes({commit}, data) {
            commit('setProcedureTypesLoadStatus', 1);

            ProcedureTypeAPI.getProcedureTypeTypes(
                data.url
            ).then(function(response) {
                commit('setProcedureTypesLoadStatus', 2);
                commit('setProcedureTypes', response.data.data);
                commit('setProcedureTypePagination', {
                    meta: response.data.meta,
                    links: response.data.links
                });
            }).catch(function() {
                commit('setProcedureTypesLoadStatus', 3);
                commit('setProcedureTypes', []);
            });
        },

        loadProcedureType({commit}, data) {
            commit('setProcedureTypeLoadStatus', 1);

            ProcedureTypeAPI.getProcedureType(
                data.id
            ).then(function(response) {
                commit('setProcedureTypeLoadStatus', 2);
                commit('setProcedure', response.data.data);
            }).catch(function() {
                commit('setProcedureTypeLoadStatus', 3);
                commit('setProcedureType', {});
            });
        },

        newProcedureType({commit}, data) {
            commit('setAddProcedureTypeLoadStatus', 1);

            ProcedureTypeAPI.addProcedureType(
                data.name
            ).then(function(response) {
                commit('setAddProcedureTypeLoadStatus', 2);
                commit('setAddProcedureTypeResult', response.data);
            }).catch(function() {
                commit('setAddProcedureTypeLoadStatus', 3);
                commit('setAddProcedureTypeResult', {
                    success: 0,
                    message: 'Something went wrong. Try again!'
                });
            });
        },

        editProcedureType({commit}, data) {
            commit('setUpdateProcedureTypeLoadStatus', 1);

            ProcedureTypeAPI.updateProcedureType(
                data.id,
                data.name
            ).then(function(response) {
                commit('setUpdateProcedureTypeLoadStatus', 2);
                commit('setUpdateProcedureTypeResult', response.data);
            }).catch(function() {
                commit('setUpdateProcedureTypeLoadStatus', 3);
                commit('setUpdateProcedureTypeResult', {
                    success: 0,
                    message: 'Something went wrong. Try again'
                });
            });
        },

        deleteProcedureType({commit}, data) {
            commit('setDeleteProcedureTypeLoadStatus', 1);

            ProcedureTypeAPI.deleteProcedureType(
                data.id
            ).then(function(response) {
                commit('setDeleteProcedureTypeLoadStatus', 2);
                commit('setDeleteProcedureTypeResult', response.data);
            }).catch(function() {
                commit('setDeleteProcedureTypeLoadStatus', 3);
                commit('setDeleteProcedureTypeResult', {
                    success: 0,
                    message: 'Something went wrong. Try again'
                });
            });
        }
    },
    mutations: {
        setProcedureTypes(state, procedureTypes) {
            state.procedureTypes = procedureTypes;
        }, 
        setProcedureTypesLoadStatus(state, procedureTypesLoadStatus) {
            state.procedureTypesLoadStatus = procedureTypesLoadStatus;
        },
        setProcedureType(state, procedureType) {
            state.procedureType = procedureType;
        },
        setProcedureTypeLoadStatus(state, status) {
            state.procedureTypeLoadStatus = status;
        },
        setProcedureTypePagination(state, data) {
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
        
            state.procedureTypePagination = pagination;
        },
        setAddProcedureTypeLoadStatus(state, status) {
            state.addProcedureTypeLoadStatus = status;
        }, 
        setAddProcedureTypeResult(state, result) {
            state.addProcedureTypeResult = result;
        },
        setUpdateProcedureTypeLoadStatus(state, status) {
            state.updateProcedureTypeLoadStatus = status;
        },
        setUpdateProcedureTypeResult(state, result) {
            state.updateProcedureTypeResult = result;
        },
        setDeleteProcedureTypeLoadStatus(state, status) {
            state.deleteProcedureTypeLoadStatus = status;
        },
        setDeleteProcedureTypeResult(state, result) {
            state.deleteProcedureTypeResult = result;
        }
    },
    getters: {
        getProcedureTypeTypes(state) {
            return state.procedureTypes;
        }, 
        getProcedureTypeTypesLoadStatus(state) {
            return state.procedureTypesLoadStatus;
        },
        getProcedureType(state) {
            return state.procedureType;
        },
        getProcedureTypeLoadStatus(state) {
            return state.procedureTypeLoadStatus;
        },
        getProcedureTypePagination(state) {
            return state.procedureTypePagination;
        },
        getAddProcedureTypeLoadStatus(state) {
            return state.addProcedureTypeLoadStatus;
        }, 
        getAddProcedureTypeResult(state) {
            return state.addProcedureTypeResult;
        },
        getUpdateProcedureTypeLoadStatus(state) {
            return state.updateProcedureTypeLoadStatus;
        },
        getUpdateProcedureTypeResult(state) {
            return state.updateProcedureTypeResult;
        },
        getDeleteProcedureTypeLoadStatus(state) {
            return state.deleteProcedureTypeLoadStatus;
        },
        getDeleteProcedureTypeResult(state) {
            return state.deleteProcedureTypeResult;
        }
    }
};