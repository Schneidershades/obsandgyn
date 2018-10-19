/*
|-------------------------------------------------------------------------------
| VUEX modules/patient.js
|-------------------------------------------------------------------------------
| The Vuex data store for the patient
*/

import PatientAPI from '../api/patient.js'; 

export const patient = {
    state: {
        patients: [],
        patientsLoadStatus: 0,
        patient: {},
        patientLoadStatus: 0,
        patientPagination: {},
        addPatientLoadStatus: 0,
        addPatientResult: {},
        updatePatientLoadStatus: 0,
        updatePatientResult: {},
        deletePatientLoadStatus: 0,
        deletePatientResult: {}
    },
    actions: {
        loadPatients({commit}, data) {
            commit('setPatientsLoadStatus', 1);

            PatientAPI.getPatients(
                data.url
            ).then(function(response) {
                commit('setPatientsLoadStatus', 2);
                commit('setPatients', response.data.data);
                commit('setPatientPagination', {
                    meta: response.data.meta,
                    links: response.data.links
                });
            }).catch(function() {
                commit('setPatientsLoadStatus', 3);
                commit('setPatients', []);
            });
        },

        loadPatient({commit}, data) {
            commit('setPatientLoadStatus', 1);

            PatientAPI.getPatient(
                data.id
            ).then(function(response) {
                commit('setPatientLoadStatus', 2);
                commit('setPatient', response.data.data);
            }).catch(function() {
                commit('setPatientLoadStatus', 3);
                commit('setPatient', {});
            });
        },

        newPatient({commit}, data) {
            commit('setAddPatientLoadStatus', 1);

            PatientAPI.addPatient(
                data.name, 
                data.address,
                data.religion,
                data.birth_date,
                data.tribe, 
                data.husband_occupation
            ).then(function(response) {
                commit('setAddPatientLoadStatus', 2);
                commit('setAddPatientResult', response.data);
            }).catch(function() {
                commit('setAddPatientLoadStatus', 3);
                commit('setAddPatientResult', {
                    success: 0,
                    message: 'Something went wrong. Try again!'
                });
            });
        },

        editPatient({commit}, data) {
            commit('setUpdatePatientLoadStatus', 1);

            PatientAPI.updatePatient(
                data.id,
                data.address,
                data.religion,
                data.birth_date,
                data.tribe,
                data.husband_occupation
            ).then(function(response) {
                commit('setUpdatePatientLoadStatus', 2);
                commit('setUpdatePatientResult', response.data);
            }).catch(function() {
                commit('setUpdatePatientLoadStatus', 3);
                commit('setUpdatePatientResult', {
                    success: 0,
                    message: 'Something went wrong. Try again'
                });
            });
        },

        deletePatient({commit}, data) {
            commit('setDeletePatientLoadStatus', 1);

            PatientAPI.deletePatient(
                data.id
            ).then(function(response) {
                commit('setDeletePatientLoadStatus', 2);
                commit('setDeletePatientResult', response.data);
            }).catch(function() {
                commit('setDeletePatientLoadStatus', 3);
                commit('setDeletePatientResult', {
                    success: 0,
                    message: 'Something went wrong. Try again'
                });
            });
        }
    },
    mutations: {
        setPatients(state, patients) {
            state.patients = patients;
        }, 
        setPatientsLoadStatus(state, patientsLoadStatus) {
            state.patientsLoadStatus = patientsLoadStatus;
        },
        setPatient(state, patient) {
            state.patient = patient;
        },
        setPatientLoadStatus(state, status) {
            state.patientLoadStatus = status;
        },
        setPatientPagination(state, data) {
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
        
            state.patientPagination = pagination;
        },
        setAddPatientLoadStatus(state, status) {
            state.addPatientLoadStatus = status;
        }, 
        setAddPatientResult(state, result) {
            state.addPatientResult = result;
        },
        setUpdatePatientLoadStatus(state, status) {
            state.updatePatientLoadStatus = status;
        },
        setUpdatePatientResult(state, result) {
            state.updatePatientResult = result;
        },
        setDeletePatientLoadStatus(state, status) {
            state.deletePatientLoadStatus = status;
        },
        setDeletePatientResult(state, result) {
            state.deletePatientResult = result;
        }
    },
    getters: {
        getPatients(state) {
            return state.patients;
        }, 
        getPatientsLoadStatus(state) {
            return state.patientsLoadStatus;
        },
        getPatient(state) {
            return state.patient;
        },
        getPatientLoadStatus(state) {
            return state.patientLoadStatus;
        },
        getPatientPagination(state) {
            return state.patientPagination;
        },
        getAddPatientLoadStatus(state) {
            return state.addPatientLoadStatus;
        }, 
        getAddPatientResult(state) {
            return state.addPatientResult;
        },
        getUpdatePatientLoadStatus(state) {
            return state.updatePatientLoadStatus;
        },
        getUpdatePatientResult(state) {
            return state.updatePatientResult;
        },
        getDeletePatientLoadStatus(state) {
            return state.deletePatientLoadStatus;
        },
        getDeletePatientResult(state) {
            return state.deletePatientResult;
        }
    }
};