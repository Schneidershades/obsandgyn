/*
|-------------------------------------------------------------------------------
| VUEX modules/appointment.js
|-------------------------------------------------------------------------------
| The Vuex data store for the appointment
*/

import AppointmentAPI from '../api/appointment.js'; 

export const appointment = {
    state: {
        appointments: [],
        appointmentsLoadStatus: 0,
        appointment: {},
        appointmentLoadStatus: 0,
        apPagination: {},
        addAppointmentLoadStatus: 0,
        addAppointmentResult: {},
        updateAppointmentLoadStatus: 0,
        updateAppointmentResult: {},
        deleteAppointmentLoadStatus: 0,
        deleteAppointmentResult: {}
    },
    actions: {
        loadAppointments({commit, state, dispatch}) {
            commit('setAppointmentsLoadStatus', 1);

            AppointmentAPI.getAppointments(
                data.url
            ).then(function(response) {
                commit('setAppointmentsLoadStatus', 2);
                commit('setAppointments', response.data.data);
                commit('setApPagination', {
                    meta: response.data.meta,
                    links: response.data.links
                });
            }).catch(function() {
                commit('setAppointmentsLoadStatus', 3);
                commit('setAppointments', []);
            });
        },

        loadAppointment({commit, state, dispatch}, data) {
            commit('setAppointmentLoadStatus', 1);

            AppointmentAPI.getAppointment(
                data.id
            ).then(function(response) {
                commit('setAppointmentLoadStatus', 2);
                commit('setAppointment', response.data.data);
            }).catch(function() {
                commit('setAppointmentLoadStatus', 3);
                commit('setAppointment', {});
            });
        },

        newAppointment({commit, state, dispatch}, data) {
            commit('setAddAppointmentLoadStatus', 1);
            
            AppointmentAPI.addAppointment(
                data.patient_id,
                data.start_date,
                data.end_date,
                data.examiner,
                data.location,
                data.appointment_type_id,
                data.appointment_status_id,
                data.notes
            ).then(function(response) {
                commit('setAddAppointmentLoadStatus', 2);
                commit('setAddAppointmentResult', response.data);
            }).catch(function() {
                commit('setAddAppointmentLoadStatus', 3);
                commit('setAddAppointmentResult', {
                    success: 0,
                    message: 'Something went wrong. Try again!'
                });
            });
        },

        editAppointment({commit, state, dispatch}, data) {
            commit('setUpdateAppointmentLoadStatus', 1);

            AppointmentAPI.updateAppointment(
                data.id,
                data.start_date,
                data.end_date,
                data.examiner,
                data.location,
                data.appointment_type_id,
                data.appointment_status_id,
                data.notes
            ).then(function(response) {
                commit('setUpdateAppointmentLoadStatus', 2);
                commit('setUpdateAppointmentResult', response.data);
            }).catch(function() {
                commit('setUpdateAppointmentLoadStatus', 3);
                commit('setUpdateAppointmentResult', {
                    success: 0,
                    message: 'Something went wrong. Try again!'
                });
            });
        },

        removeAppointment({commit, state, dispatch}, data) {
            commit('setDeleteAppointmentLoadStatus', 1);

            AppointmentAPI.deleteAppointment(
                data.id
            ).then(function(response) {
                commit('setDeleteAppointmentLoadStatus', 2);
                commit('setDeleteAppointmentResult', response.data);
            }).catch(function() {
                commit('setDeleteAppointmentLoadStatus', 3);
                commit('setDeleteAppointmentResult', {
                    success: 0,
                    message: 'Something went wrong. Try again!'
                });
            });
        }
    },
    mutations: {
        setAppointments(state, appointments) {
            state.appointments = appointments;
        },
        setAppointmentsLoadStatus(state, status) {
            state.appointmentsLoadStatus = status;
        },
        setAppointment(state, appointment) {
            state.appointment = appointment;
        },
        setAppointmentLoadStatus(state, status) {
            state.appointmentLoadStatus = status;
        },
        setApPagination(state, data) {
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
        
            state.apPagination = pagination;
        },
        setAddAppointmentLoadStatus(state, status) {
            state.addAppointmentLoadStatus = status;
        },
        setAddAppointmentResult(state, result) {
            state.addAppointmentResult = result;
        },
        setUpdateAppointmentLoadStatus(state, status) {
            state.updateAppointmentLoadStatus = status;
        },
        setUpdateAppointmentResult(state, result) {
            state.updateAppointmentResult = result;
        },
        setDeleteAppointmentLoadStatus(state, status) {
            state.deleteAppointmentLoadStatus = status;
        },
        setDeleteAppointmentResult(state, result) {
            state.deleteAppointmentResult = result;
        }
    },
    getters: {
        getAppointments(state) {
            return state.appointments;
        },
        getAppointmentsLoadStatus(state) {
            return state.appointmentsLoadStatus;
        },
        getAppointment(state) {
            return state.appointment;
        },
        setAppointmentLoadStatus(state) {
            return state.appointmentLoadStatus;
        },
        getApPagination(state) {
            return state.apPagination;
        },
        getAddAppointmentLoadStatus(state) {
            return state.addAppointmentLoadStatus;
        },
        getAddAppointmentResult(state) {
            return state.addAppointmentResult;
        },
        getUpdateAppointmentLoadStatus(state) {
            return state.updateAppointmentLoadStatus;
        },
        getUpdateAppointmentResult(state) {
            return state.updateAppointmentResult;
        },
        getDeleteAppointmentLoadStatus(state) {
            return state.deleteAppointmentLoadStatus;
        },
        getDeleteAppointmentResult(state) {
            return state.deleteAppointmentResult;
        }
    }
};