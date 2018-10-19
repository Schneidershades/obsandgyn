/*
|-------------------------------------------------------------------------------
| VUEX modules/appointmentType.js
|-------------------------------------------------------------------------------
| The Vuex data store for the appointmentType
*/

import AppointmentTypeAPI from '../api/appointmentType.js'; 

export const appointmentType = {
    state: {
        appointmentTypes: [],
        appointmentTypesLoadStatus: 0
    },
    actions: {
        loadAppointmentTypes({commit}) {
            commit('setAppointmentTypesLoadStatus', 1);

            AppointmentTypeAPI.getAppointmentTypes(
                data.url
            ).then(function(response) {
                commit('setAppointmentTypesLoadStatus', 2); 
                commit('setAppointmentTypes', response.data.data);               
            }).catch(function() {
                commit('setAppointmentTypesLoadStatus', 3);
                commit('setAppointmentTypes', []);
            });
        }
    },
    mutations: {
        setAppointmentTypes(state, appointmentTypes) {
            state.appointmentTypes = appointmentTypes;
        },
        setAppointmentTypesLoadStatus(state, status) {
            state.appointmentTypesLoadStatus = status;
        }
    },
    getters: {
        getAppointmentTypes(state) {
            return state.appointmentTypes;
        },
        getAppointmentTypesLoadStatus(state) {
            return state.appointmentTypesLoadStatus;
        }
    }
};