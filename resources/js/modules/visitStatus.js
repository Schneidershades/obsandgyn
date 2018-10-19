/*
|-------------------------------------------------------------------------------
| VUEX modules/visitStatus.js
|-------------------------------------------------------------------------------
| The Vuex data store for the visitStatus
*/

import VisitStatusAPI from '../api/visitStatus.js'; 

export const visitStatus = {
    state: {
        visitStatuses: [],
        visitStatusesLoadStatus: 0,
    },
    actions: {
        loadVisitStatuses({commit}) {
            commit('setVisitStatusesLoadStatuse', 1);

            VisitStatusAPI.getVisitStatuses(
                data.url
            ).then(function(response) {
                commit('setVisitStatusesLoadStatus', 2);
                commit('setVisitStatuses', response.data.data);
            }).catch(function() {
                commit('setVisitStatusesLoadStatus', 3);
                commit('setVisitStatuses', []);
            });
        }
    },
    mutations: {
        setVisitStatuses(state, statuses) {
            state.visitStatuses = statuses;
        },
        setVisitStatusesLoadStatus(state, status) {
            state.visitStatusesLoadStatus = status;
        }
    },
    getters: {
        getVisitStatuses(state) {
            return state.visitStatuses;
        },
        getVisitStatusesLoadStatus(state) {
            return state.visitStatusesLoadStatus;
        }
    }
};