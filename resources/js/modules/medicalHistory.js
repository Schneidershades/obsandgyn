/*
|-------------------------------------------------------------------------------
| VUEX modules/medicalHistory.js
|-------------------------------------------------------------------------------
| The Vuex data store for the medicalHistory
*/

import MedicalHistoryAPI from '../api/medicalHistory.js'; 

export const medicalHistory = {
    state: {
        medicalHistories: [],
        medicalHistoriesLoadStatus: 0,
        medicalHistory: {},
        medicalHistoryLoadStatus: 0,
        mhPagination: {},
        addMedicalHistoryLoadStatus: 0,
        addMedicalHistoryResult: {},
        updateMedicalHistoryLoadStatus: 0,
        updateMedicalHistoryResult: {},
        deleteMedicalHistoryLoadStatus: 0,
        deleteMedicalHistoryResult: {} 
    },
    actions: {
        loadMedicalHistories({commit}, data) {
            commit('setMedicalHistoriesLoadStatus', 1);

            MedicalHistoryAPI.getMedicalHistories(
                data.patient_id,
                data.url
            ).then(function(response) {
                commit('setMedicalHistoriesLoadStatus', 2);
                commit('setMedicalHistories', response.data.data);
                commit('setMhPagination', {
                    meta: response.data.meta,
                    links: response.data.links
                });
            }).catch(function() {
                commit('setMedicalHistoriesLoadStatus', 3);
                commit('setMedicalHistories', []);
            });
        },
        loadMedicalHistory({commit}, data) {
            commit('setMedicalHistoryLoadStatus', 1);

            MedicalHistoryAPI.getMedicalHistory(
                data.id
            ).then(function(response) {
                commit('setMedicalHistoryLoadStatus', 2);
                commit('setMedicalHistory', response.data.data);
            }).catch(function() {
                commit('setMedicalHistoryLoadStatus', 3);
                commit('setMedicalHistory', {});
            });
        },
        newMedicalHistory({commit}, data) {
            commit('setAddMedicalHistoryLoadStatus', 1);

            MedicalHistoryAPI.addMedicalHistory(
                data.patient_id,
                data.remarks,
                data.lmp,
                data.eod,
                data.gravida
            ).then(function(response) {
                commit('setAddMedicalHistoryLoadStatus', 2);
                commit('setAddMedicalHistoryResult', response.data);
            }).catch(function() {
                commit('setAddMedicalHistoryLoadStatus', 3);
                commit('setAddMedicalHistoryResult', {
                    success: 0,
                    message: 'Something went wrong. Try again.'
                });
            });
        },
        editMedicalHistory({commit}, data) {
            commit('setUpdateMedicalHistoryLoadStatus', 1);

            MedicalHistoryAPI.updateMedicalHistory(
                data.id, 
                data.remarks,
                data.lmp,
                data.eod,
                data.gravida
            ).then(function(response){
                commit('setUpdateMedicalHistoryLoadStatus', 2);
                commit('setUpdateMedicalHistoryResult', response.data);
            }).catch(function() {
                commit('setUpdateMedicalHistoryLoadStatus', 3);
                commit('setUpdateMedicalHistoryResult', {
                    success: 0,
                    message: 'Something went wrong. Try again.'
                });
            });
        },
        removeMedicalHistory({commit}, data) {
            commit('setDeleteMedicalHistoryLoadStatus', 1);

            MedicalHistoryAPI.deleteMedicalHistory(
                data.id
            ).then(function(response) {
                commit('setDeleteMedicalHistoryLoadStatus', 2);
                commit('setDeleteMedicalHistoryResult', response.data);
            }).catch(function() {
                commit('setDeleteMedicalHistoryLoadStatus', 3);
                commit('setDeleteMedicalHistoryResult', {
                    success: 0,
                    message: 'Something went wrong. Try again.'
                })
            })
        }
    },
    mutations: {
        setMedicalHistories(state, medicalHistories) {
            state.medicalHistories = medicalHistories;
        },
        setMedicalHistoriesLoadStatus(state, status) {
            state.medicalHistoriesLoadStatus = status;
        },
        setMedicalHistory(state, medicalHistory) {
            state.medicalHistory = medicalHistory;
        },
        setMedicalHistoryLoadStatus(state, status) {
            state.medicalHistoryLoadStatus = status;
        },
        setMhPagination(state, data) {
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
        
            state.mhPagination = pagination;
        },
        setAddMedicalHistoryLoadStatus(state, status) {
            state.addMedicalHistoryLoadStatus = status;
        },
        setAddMedicalHistoryResult(state, result) {
            state.addMedicalHistoryResult = result;
        },
        setUpdateMedicalHistoryLoadStatus(state, status) {
            state.updateMedicalHistoryLoadStatus = status;
        },
        setUpdateMedicalHistoryResult(state, result) {
            state.updateMedicalHistoryResult = result;
        },
        setDeleteMedicalHistoryLoadStatus(state, status) {
            state.deleteMedicalHistoryLoadStatus = status;
        },
        setDeleteMedicalHistoryResult(state, result) {
            state.deleteMedicalHistoryResult = result;
        }
    },
    getters: {
        getMedicalHistories(state) {
            return state.medicalHistories;
        },
        getMedicalHistoriesLoadStatus(state) {
            return state.medicalHistoriesLoadStatus;
        },
        getMedicalHistory(state) {
            return state.medicalHistory;
        },
        getMedicalHistoryLoadStatus(state) {
            return state.medicalHistoryLoadStatus;
        },
        getMhPagination(state) {
            return state.mhPagination;
        },
        getAddMedicalHistoryLoadStatus(state) {
            return state.addMedicalHistoryLoadStatus;
        },
        getAddMedicalHistoryResult(state) {
            return state.addMedicalHistoryResult;
        },
        getUpdateMedicalHistoryLoadStatus(state) {
            return state.updateMedicalHistoryLoadStatus;
        },
        getUpdateMedicalHistoryResult(state) {
            return state.updateMedicalHistoryResult;
        },
        getDeleteMedicalHistoryLoadStatus(state) {
            return state.deleteMedicalHistoryLoadStatus;
        },
        getDeleteMedicalHistoryResult(state) {
           return state.deleteMedicalHistoryResult;
        }
    }
};