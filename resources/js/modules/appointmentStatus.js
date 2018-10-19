/*
|-------------------------------------------------------------------------------
| VUEX modules/appointmentStatus.js
|-------------------------------------------------------------------------------
| The Vuex data store for the appointmentStatus
*/

import AppointmentStatusAPI from '../api/appointmentStatus.js'; 

export const appointmentStatus = {
    state: {
        appointmentStatuses: [],
        appointmentStatusesLoadStatus: 0,
    },
    actions: {
        loadAppointmentStatuses({commit}) {
            commit('setAppointmentStatusesLoadStatuse', 1);

            AppointmentStatusAPI.getAppointmentStatuses(
                data.url
            ).then(function(response) {
                commit('setAppointmentStatusesLoadStatus', 2);
                commit('setAppointmentStatuses', response.data.data);
            }).catch(function() {
                commit('setAppointmentStatusesLoadStatus', 3);
                commit('setAppointmentStatuses', []);
            });
        }
    },
    mutations: {
        setAppointmentStatuses(state, statuses) {
            state.appointmentStatuses = statuses;
        },
        setAppointmentStatusesLoadStatus(state, status) {
            state.appointmentStatusesLoadStatus = status;
        }
    },
    getters: {
        getAppointmentStatuses(state) {
            return state.appointmentStatuses;
        },
        getAppointmentStatusesLoadStatus(state) {
            return state.appointmentStatusesLoadStatus;
        }
    }
};