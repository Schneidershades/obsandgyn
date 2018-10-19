/*
|-------------------------------------------------------------------------------
| VUEX modules/procedure.js
|-------------------------------------------------------------------------------
| The Vuex data store for the procedure
*/

import ProcedureAPI from '../api/procedure.js'; 

export const procedure = {
    state: {
        procedures: [],
        proceduresLoadStatus: 0,
        procedure: {},
        procedureLoadStatus: 0,
        procedurePagination: {},
        addProcedureLoadStatus: 0,
        addProcedureResult: {},
        updateProcedureLoadStatus: 0,
        updateProcedureResult: {},
        deleteProcedureLoadStatus: 0,
        deleteProcedureResult: {}
    },
    actions: {
        loadProcedures({commit}, data) {
            commit('setProceduresLoadStatus', 1);

            ProcedureAPI.getProcedures(
                data.visit_id,
                data.url
            ).then(function(response) {
                commit('setProceduresLoadStatus', 2);
                commit('setProcedures', response.data.data);
                commit('setProcedurePagination', {
                    meta: response.data.meta,
                    links: response.data.links
                });
            }).catch(function() {
                commit('setProceduresLoadStatus', 3);
                commit('setProcedures', []);
            });
        },

        loadprocedure({commit}, data) {
            commit('setProcedureLoadStatus', 1);

            ProcedureAPI.getProcedure(
                data.id
            ).then(function(response) {
                commit('setProcedureLoadStatus', 2);
                commit('setProcedure', response.data.data);
            }).catch(function() {
                commit('setProcedureLoadStatus', 3);
                commit('setProcedure', {});
            });
        },

        newProcedure({commit}, data) {
            commit('setAddProcedureLoadStatus', 1);

            ProcedureAPI.addProcedure(
                data.visit_id,
                data.procedure_type_id,
                data.location, 
                data.start_date, 
                data.end_date,
                data.physician,
                data.anesthesiologist,
                data.anesthesiologist_type_id,
                data.notes
            ).then(function(response) {
                commit('setAddProcedureLoadStatus', 2);
                commit('setAddProcedureResult', response.data);
            }).catch(function() {
                commit('setAddProcedureLoadStatus', 3);
                commit('setAddProcedureResult', {
                    success: 0,
                    message: 'Something went wrong. Try again!'
                });
            });
        },

        editprocedure({commit}, data) {
            commit('setUpdateProcedureLoadStatus', 1);

            ProcedureAPI.updateProcedure(
                data.id,
                data.procedure_type_id,
                data.location,
                data.start_date,
                data.end_date,
                data.physician,
                data.anesthesiologist,
                data.anesthesiologist_type_id,
                data.notes
            ).then(function(response) {
                commit('setUpdateProcedureLoadStatus', 2);
                commit('setUpdateProcedureResult', response.data);
            }).catch(function() {
                commit('setUpdateProcedureLoadStatus', 3);
                commit('setUpdateProcedureResult', {
                    success: 0,
                    message: 'Something went wrong. Try again'
                });
            });
        },

        deleteProcedure({commit}, data) {
            commit('setDeleteProcedureLoadStatus', 1);

            ProcedureAPI.deleteProcedure(
                data.id
            ).then(function(response) {
                commit('setDeleteProcedureLoadStatus', 2);
                commit('setDeleteProcedureResult', response.data);
            }).catch(function() {
                commit('setDeleteProcedureLoadStatus', 3);
                commit('setDeleteProcedureResult', {
                    success: 0,
                    message: 'Something went wrong. Try again'
                });
            });
        }
    },
    mutations: {
        setProcedures(state, procedures) {
            state.procedures = procedures;
        }, 
        setProceduresLoadStatus(state, proceduresLoadStatus) {
            state.proceduresLoadStatus = proceduresLoadStatus;
        },
        setProcedure(state, procedure) {
            state.procedure = procedure;
        },
        setProcedureLoadStatus(state, status) {
            state.procedureLoadStatus = status;
        },
        setProcedurePagination(state, data) {
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
        
            state.procedurePagination = pagination;
        },
        setAddProcedureLoadStatus(state, status) {
            state.addProcedureLoadStatus = status;
        }, 
        setAddProcedureResult(state, result) {
            state.addProcedureResult = result;
        },
        setUpdateProcedureLoadStatus(state, status) {
            state.updateProcedureLoadStatus = status;
        },
        setUpdateProcedureResult(state, result) {
            state.updateProcedureResult = result;
        },
        setDeleteProcedureLoadStatus(state, status) {
            state.deleteProcedureLoadStatus = status;
        },
        setDeleteProcedureResult(state, result) {
            state.deleteProcedureResult = result;
        }
    },
    getters: {
        getProcedures(state) {
            return state.procedures;
        }, 
        getProceduresLoadStatus(state) {
            return state.proceduresLoadStatus;
        },
        getProcedure(state) {
            return state.procedure;
        },
        getProcedureLoadStatus(state) {
            return state.procedureLoadStatus;
        },
        getProcedurePagination(state) {
            return state.procedurePagination;
        },
        getAddProcedureLoadStatus(state) {
            return state.addProcedureLoadStatus;
        }, 
        getAddProcedureResult(state) {
            return state.addProcedureResult;
        },
        getUpdateProcedureLoadStatus(state) {
            return state.updateProcedureLoadStatus;
        },
        getUpdateProcedureResult(state) {
            return state.updateProcedureResult;
        },
        getDeleteProcedureLoadStatus(state) {
            return state.deleteProcedureLoadStatus;
        },
        getDeleteProcedureResult(state) {
            return state.deleteProcedureResult;
        }
    }
};