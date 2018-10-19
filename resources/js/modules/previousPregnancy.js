/*
|-------------------------------------------------------------------------------
| VUEX modules/previousPregnancy.js
|-------------------------------------------------------------------------------
| The Vuex data store for the previousPregnancy
*/

import PreviousPregnancyAPI from '../api/previousPregnancy.js'; 

export const previousPregnancy = {
    state: {
        previousPregnancies: [],
        previousPregnanciesLoadStatus: 0,
        previousPregnancy: {},
        previousPregnancyLoadStatus: 0,
        previousPregnancyPagination: {},
        addPreviousPregnancyLoadStatus: 0,
        addPreviousPregnancyResult: {},
        updatePreviousPregnancyLoadStatus: 0,
        updatePreviousPregnancyResult: {},
        deletePreviousPregnancyLoadStatus: 0,
        deletePreviousPregnancyResult: {}
    },
    actions: {
        loadPreviousPregnancies({commit}, data) {
            commit('setPreviousPregnanciesLoadStatus', 1);

            PreviousPregnancyAPI.getPreviousPregnancies(
                data.patient_id,
                data.url
            ).then(function(response) {
                commit('setPreviousPregnanciesLoadStatus', 2);
                commit('setPreviousPregnancies', response.data.data);
                commit('setPreviousPregnancyPagination', {
                    meta: response.data.meta,
                    links: response.data.links
                });
            }).catch(function() {
                commit('setPreviousPregnanciesLoadStatus', 3);
                commit('setPreviousPregnancies', []);
            });
        },

        loadPreviousPregnancy({commit}, data) {
            commit('setPreviousPregnancyLoadStatus', 1);

            PreviousPregnancyAPI.getPreviousPregnancy(
                data.id
            ).then(function(response) {
                commit('setPreviousPregnancyLoadStatus', 2);
                commit('setPreviousPregnancy', response.data.data);
            }).catch(function() {
                commit('setPreviousPregnancyLoadStatus', 3);
                commit('setPreviousPregnancy', {});
            });
        },

        newPreviousPregnancy({commit}, data) {
            commit('setAddPreviousPregnancyLoadStatus', 1);

            PreviousPregnancyAPI.addPreviousPregnancy(
                data.patient_id,
                data.year,
                data.duration,
                data.antenatal_complications,
                data.labour,
                data.age_if_alive,
                data.age_if_dead,
                data.cause_of_death
            ).then(function(response) {
                commit('setAddPreviousPregnancyLoadStatus', 2);
                commit('setAddPreviousPregnancyResult', response.data);
            }).catch(function() {
                commit('setAddPreviousPregnancyLoadStatus', 3);
                commit('setAddPreviousPregnancyResult', {
                    success: 0,
                    message: 'Something went wrong. Try again!'
                });
            });
        },

        editPreviousPregnancy({commit}, data) {
            commit('setUpdatePreviousPregnancyLoadStatus', 1);

            PreviousPregnancyAPI.updatePreviousPregnancy(
                data.id,
                data.year,
                data.duration,
                data.antenatal_complications,
                data.labour,
                data.age_if_alive,
                data.age_if_dead,
                data.cause_of_death
            ).then(function(response) {
                commit('setUpdatePreviousPregnancyLoadStatus', 2);
                commit('setUpdatePreviousPregnancyResult', response.data);
            }).catch(function() {
                commit('setUpdatePreviousPregnancyLoadStatus', 3);
                commit('setUpdatePreviousPregnancyResult', {
                    success: 0,
                    message: 'Something went wrong. Try again'
                });
            });
        },

        deletePreviousPregnancy({commit}, data) {
            commit('setDeletePreviousPregnancyLoadStatus', 1);

            PreviousPregnancyAPI.deletePreviousPregnancy(
                data.id
            ).then(function(response) {
                commit('setDeletePreviousPregnancyLoadStatus', 2);
                commit('setDeletePreviousPregnancyResult', response.data);
            }).catch(function() {
                commit('setDeletePreviousPregnancyLoadStatus', 3);
                commit('setDeletePreviousPregnancyResult', {
                    success: 0,
                    message: 'Something went wrong. Try again'
                });
            });
        }
    },
    mutations: {
        setPreviousPregnancies(state, previousPregnancies) {
            state.previousPregnancies = previousPregnancies;
        }, 
        setPreviousPregnanciesLoadStatus(state, previousPregnanciesLoadStatus) {
            state.previousPregnanciesLoadStatus = previousPregnanciesLoadStatus;
        },
        setPreviousPregnancy(state, previousPregnancy) {
            state.previousPregnancy = previousPregnancy;
        },
        setPreviousPregnancyLoadStatus(state, status) {
            state.previousPregnancyLoadStatus = status;
        },
        setPreviousPregnancyPagination(state, data) {
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
        
            state.previousPregnancyPagination = pagination;
        },
        setAddPreviousPregnancyLoadStatus(state, status) {
            state.addPreviousPregnancyLoadStatus = status;
        }, 
        setAddPreviousPregnancyResult(state, result) {
            state.addPreviousPregnancyResult = result;
        },
        setUpdatePreviousPregnancyLoadStatus(state, status) {
            state.updatePreviousPregnancyLoadStatus = status;
        },
        setUpdatePreviousPregnancyResult(state, result) {
            state.updatePreviousPregnancyResult = result;
        },
        setDeletePreviousPregnancyLoadStatus(state, status) {
            state.deletePreviousPregnancyLoadStatus = status;
        },
        setDeletePreviousPregnancyResult(state, result) {
            state.deletePreviousPregnancyResult = result;
        }
    },
    getters: {
        getPreviousPregnancies(state) {
            return state.previousPregnancies;
        }, 
        getPreviousPregnanciesLoadStatus(state) {
            return state.previousPregnanciesLoadStatus;
        },
        getPreviousPregnancy(state) {
            return state.previousPregnancy;
        },
        getPreviousPregnancyLoadStatus(state) {
            return state.previousPregnancyLoadStatus;
        },
        getPreviousPregnancyPagination(state) {
            return state.previousPregnancyPagination;
        },
        getAddPreviousPregnancyLoadStatus(state) {
            return state.addPreviousPregnancyLoadStatus;
        }, 
        getAddPreviousPregnancyResult(state) {
            return state.addPreviousPregnancyResult;
        },
        getUpdatePreviousPregnancyLoadStatus(state) {
            return state.updatePreviousPregnancyLoadStatus;
        },
        getUpdatePreviousPregnancyResult(state) {
            return state.updatePreviousPregnancyResult;
        },
        getDeletePreviousPregnancyLoadStatus(state) {
            return state.deletePreviousPregnancyLoadStatus;
        },
        getDeletePreviousPregnancyResult(state) {
            return state.deletePreviousPregnancyResult;
        }
    }
};