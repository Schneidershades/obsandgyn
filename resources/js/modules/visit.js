/*
|-------------------------------------------------------------------------------
| VUEX modules/visit.js
|-------------------------------------------------------------------------------
| The Vuex data store for the visit
*/

import VisitAPI from '../api/visit.js'; 

export const visit = {
    state: {
        visits: [],
        visitsLoadStatus: 0,
        visit: {},
        visitLoadStatus: 0,
        visitPagination: {},
        addVisitLoadStatus: 0,
        addVisitResult: {},
        updateVisitLoadStatus: 0,
        updateVisitResult: {},
        deleteVisitLoadStatus: 0,
        deleteVisitResult: {}
    },
    actions: {
        loadVisits({commit}, data) {
            commit('setVisitsLoadStatus', 1);

            VisitAPI.getVisits(
                data.pregnancy_id,
                data.url
            ).then(function(response) {
                commit('setVisitsLoadStatus', 2);
                commit('setVisits', response.data.data);
                commit('setVisitPagination', {
                    meta: response.data.meta,
                    links: response.data.links
                });
            }).catch(function() {
                commit('setVisitsLoadStatus', 3);
                commit('setVisits', []);
            });
        },

        loadVisit({commit}, data) {
            commit('setVisitLoadStatus', 1);

            VisitAPI.getVisit(
                data.id
            ).then(function(response) {
                commit('setVisitLoadStatus', 2);
                commit('setVisit', response.data.data);
            }).catch(function() {
                commit('setVisitLoadStatus', 3);
                commit('setVisit', {});
            });
        },

        newVisit({commit}, data) {
            commit('setAddVisitLoadStatus', 1);

            VisitAPI.addVisit(
                data.pregnancy_id,
                data.start_date, 
                data.end_date,
                data.diagnosis,
                data.examiner, 
                data.visit_type_id,
                data.visit_status_id
            ).then(function(response) {
                commit('setAddVisitLoadStatus', 2);
                commit('setAddVisitResult', response.data);
            }).catch(function() {
                commit('setAddVisitLoadStatus', 3);
                commit('setAddVisitResult', {
                    success: 0,
                    message: 'Something went wrong. Try again!'
                });
            });
        },

        editVisit({commit}, data) {
            commit('setUpdateVisitLoadStatus', 1);

            VisitAPI.updateVisit(
                data.id,
                data.end_date,
                data.diagnosis,
                data.examiner,
                data.visit_type_id,
                data.visit_status_id
            ).then(function(response) {
                commit('setUpdateVisitLoadStatus', 2);
                commit('setUpdateVisitResult', response.data);
            }).catch(function() {
                commit('setUpdateVisitLoadStatus', 3);
                commit('setUpdateVisitResult', {
                    success: 0,
                    message: 'Something went wrong. Try again'
                });
            });
        },

        deleteVisit({commit}, data) {
            commit('setDeleteVisitLoadStatus', 1);

            VisitAPI.deleteVisit(
                data.id
            ).then(function(response) {
                commit('setDeleteVisitLoadStatus', 2);
                commit('setDeleteVisitResult', response.data);
            }).catch(function() {
                commit('setDeleteVisitLoadStatus', 3);
                commit('setDeleteVisitResult', {
                    success: 0,
                    message: 'Something went wrong. Try again'
                });
            });
        }
    },
    mutations: {
        setVisits(state, visits) {
            state.visits = visits;
        }, 
        setVisitsLoadStatus(state, visitsLoadStatus) {
            state.visitsLoadStatus = visitsLoadStatus;
        },
        setVisit(state, visit) {
            state.visit = visit;
        },
        setVisitLoadStatus(state, status) {
            state.visitLoadStatus = status;
        },
        setVisitPagination(state, data) {
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
        
            state.visitPagination = pagination;
        },
        setAddVisitLoadStatus(state, status) {
            state.addVisitLoadStatus = status;
        }, 
        setAddVisitResult(state, result) {
            state.addVisitResult = result;
        },
        setUpdateVisitLoadStatus(state, status) {
            state.updateVisitLoadStatus = status;
        },
        setUpdateVisitResult(state, result) {
            state.updateVisitResult = result;
        },
        setDeleteVisitLoadStatus(state, status) {
            state.deleteVisitLoadStatus = status;
        },
        setDeleteVisitResult(state, result) {
            state.deleteVisitResult = result;
        }
    },
    getters: {
        getVisits(state) {
            return state.visits;
        }, 
        getVisitsLoadStatus(state) {
            return state.visitsLoadStatus;
        },
        getVisit(state) {
            return state.visit;
        },
        getVisitLoadStatus(state) {
            return state.visitLoadStatus;
        },
        getVisitPagination(state) {
            return state.visitPagination;
        },
        getAddVisitLoadStatus(state) {
            return state.addVisitLoadStatus;
        }, 
        getAddVisitResult(state) {
            return state.addVisitResult;
        },
        getUpdateVisitLoadStatus(state) {
            return state.updateVisitLoadStatus;
        },
        getUpdateVisitResult(state) {
            return state.updateVisitResult;
        },
        getDeleteVisitLoadStatus(state) {
            return state.deleteVisitLoadStatus;
        },
        getDeleteVisitResult(state) {
            return state.deleteVisitResult;
        }
    }
};