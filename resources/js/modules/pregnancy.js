/*
|-------------------------------------------------------------------------------
| VUEX modules/pregnancy.js
|-------------------------------------------------------------------------------
| The Vuex data store for the pregnancy
*/

import PregnancyAPI from '../api/pregnancy.js'; 

export const pregnancy = {
    state: {
        pregnancies: [],
        pregnanciesLoadStatus: 0,
        pregnancy: {},
        pregnancyLoadStatus: 0,
        pregnancyPagination: {},
        addPregnancyLoadStatus: 0,
        addPregnancyResult: {},
        updatePregnancyLoadStatus: 0,
        updatePregnancyResult: {},
        deletePregnancyLoadStatus: 0,
        deletePregnancyResult: {}
    },
    actions: {
        loadPregnancies({commit}, data) {
            commit('setPregnanciesLoadStatus', 1);

            PregnancyAPI.getPregnancies(
                data.url
            ).then(function(response) {
                commit('setPregnanciesLoadStatus', 2);
                commit('setPregnancies', response.data.data);
                commit('setPregnancyPagination', {
                    meta: response.data.meta,
                    links: response.data.links
                });
            }).catch(function() {
                commit('setPregnanciesLoadStatus', 3);
                commit('setPregnancies', []);
            });
        },

        loadPregnancy({commit}, data) {
            commit('setPregnancyLoadStatus', 1);

            PregnancyAPI.getPregnancy(
                data.id
            ).then(function(response) {
                commit('setPregnancyLoadStatus', 2);
                commit('setPregnancy', response.data.data);
            }).catch(function() {
                commit('setPregnancyLoadStatus', 3);
                commit('setPregnancy', {});
            });
        },

        newPregnancy({commit}, data) {
            commit('setAddPregnancyLoadStatus', 1);

            PregnancyAPI.addPregnancy(
                data.patient_id,
                data.last_period_date,
                data.delivery_date,
                data.pregnancy_status_id,
                data.notes
            ).then(function(response) {
                commit('setAddPregnancyLoadStatus', 2);
                commit('setAddPregnancyResult', response.data);
            }).catch(function() {
                commit('setAddPregnancyLoadStatus', 3);
                commit('setAddPregnancyResult', {
                    success: 0,
                    message: 'Something went wrong. Try again!'
                });
            });
        },

        editPregnancy({commit}, data) {
            commit('setUpdatePregnancyLoadStatus', 1);

            PregnancyAPI.updatePregnancy(
                data.id,
                data.last_period_date,
                data.delivery_date,
                data.pregnancy_status_id,
                data.notes
            ).then(function(response) {
                commit('setUpdatePregnancyLoadStatus', 2);
                commit('setUpdatePregnancyResult', response.data);
            }).catch(function() {
                commit('setUpdatePregnancyLoadStatus', 3);
                commit('setUpdatePregnancyResult', {
                    success: 0,
                    message: 'Something went wrong. Try again'
                });
            });
        },

        deletePregnancy({commit}, data) {
            commit('setDeletePregnancyLoadStatus', 1);

            PregnancyAPI.deletePregnancy(
                data.id
            ).then(function(response) {
                commit('setDeletePregnancyLoadStatus', 2);
                commit('setDeletePregnancyResult', response.data);
            }).catch(function() {
                commit('setDeletePregnancyLoadStatus', 3);
                commit('setDeletePregnancyResult', {
                    success: 0,
                    message: 'Something went wrong. Try again'
                });
            });
        }
    },
    mutations: {
        setPregnancies(state, pregnancies) {
            state.pregnancies = pregnancies;
        }, 
        setPregnanciesLoadStatus(state, pregnanciesLoadStatus) {
            state.pregnanciesLoadStatus = pregnanciesLoadStatus;
        },
        setPregnancy(state, pregnancy) {
            state.pregnancy = pregnancy;
        },
        setPregnancyLoadStatus(state, status) {
            state.pregnancyLoadStatus = status;
        },
        setPregnancyPagination(state, data) {
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
        
            state.pregnancyPagination = pagination;
        },
        setAddPregnancyLoadStatus(state, status) {
            state.addPregnancyLoadStatus = status;
        }, 
        setAddPregnancyResult(state, result) {
            state.addPregnancyResult = result;
        },
        setUpdatePregnancyLoadStatus(state, status) {
            state.updatePregnancyLoadStatus = status;
        },
        setUpdatePregnancyResult(state, result) {
            state.updatePregnancyResult = result;
        },
        setDeletePregnancyLoadStatus(state, status) {
            state.deletePregnancyLoadStatus = status;
        },
        setDeletePregnancyResult(state, result) {
            state.deletePregnancyResult = result;
        }
    },
    getters: {
        getPregnancies(state) {
            return state.pregnancies;
        }, 
        getPregnanciesLoadStatus(state) {
            return state.pregnanciesLoadStatus;
        },
        getPregnancy(state) {
            return state.pregnancy;
        },
        getPregnancyLoadStatus(state) {
            return state.pregnancyLoadStatus;
        },
        getPregnancyPagination(state) {
            return state.pregnancyPagination;
        },
        getAddPregnancyLoadStatus(state) {
            return state.addPregnancyLoadStatus;
        }, 
        getAddPregnancyResult(state) {
            return state.addPregnancyResult;
        },
        getUpdatePregnancyLoadStatus(state) {
            return state.updatePregnancyLoadStatus;
        },
        getUpdatePregnancyResult(state) {
            return state.updatePregnancyResult;
        },
        getDeletePregnancyLoadStatus(state) {
            return state.deletePregnancyLoadStatus;
        },
        getDeletePregnancyResult(state) {
            return state.deletePregnancyResult;
        }
    }
};