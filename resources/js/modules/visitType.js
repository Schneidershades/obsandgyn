/*
|-------------------------------------------------------------------------------
| VUEX modules/visitType.js
|-------------------------------------------------------------------------------
| The Vuex data store for the visitType
*/

import VisitTypeAPI from '../api/visitType.js'; 

export const visitType = {
    state: {
        visitTypes: [],
        visitTypesLoadStatus: 0
    },
    actions: {
        loadVisitTypes({commit}) {
            commit('setVisitTypesLoadStatus', 1);

            VisitTypeAPI.getVisitTypes(
                data.url
            ).then(function(response) {
                commit('setVisitTypesLoadStatus', 2); 
                commit('setVisitTypes', response.data.data);               
            }).catch(function() {
                commit('setVisitTypesLoadStatus', 3);
                commit('setVisitTypes', []);
            });
        }
    },
    mutations: {
        setVisitTypes(state, visitTypes) {
            state.visitTypes = visitTypes;
        },
        setVisitTypesLoadStatus(state, status) {
            state.visitTypesLoadStatus = status;
        }
    },
    getters: {
        getVisitTypes(state) {
            return state.visitTypes;
        },
        getVisitTypesLoadStatus(state) {
            return state.visitTypesLoadStatus;
        }
    }
};