/*
|-------------------------------------------------------------------------------
| VUEX modules/pregnancyStatus.js
|-------------------------------------------------------------------------------
| The Vuex data store for the pregnancyStatus
*/

import PregnancyStatusAPI from '../api/pregnancyStatus.js'; 

export const pregnancyStatus = {
    state: {
        pregnancyStatuses: [],
        pregnancyStatusesLoadStatus: 0,
    },
    actions: {
        loadPregnancyStatuses({commit}) {
            commit('setPregnancyStatusesLoadStatuse', 1);

            PregnancyStatusAPI.getPregnancyStatuses(
                data.url
            ).then(function(response) {
                commit('setPregnancyStatusesLoadStatus', 2);
                commit('setPregnancyStatuses', response.data.data);
            }).catch(function() {
                commit('setPregnancyStatusesLoadStatus', 3);
                commit('setPregnancyStatuses', []);
            });
        }
    },
    mutations: {
        setPregnancyStatuses(state, statuses) {
            state.pregnancyStatuses = statuses;
        },
        setPregnancyStatusesLoadStatus(state, status) {
            state.pregnancyStatusesLoadStatus = status;
        }
    },
    getters: {
        getPregnancyStatuses(state) {
            return state.pregnancyStatuses;
        },
        getPregnancyStatusesLoadStatus(state) {
            return state.pregnancyStatusesLoadStatus;
        }
    }
};