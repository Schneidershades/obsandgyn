/*
|-------------------------------------------------------------------------------
| VUEX modules/anesthesiologyType.js
|-------------------------------------------------------------------------------
| The Vuex data store for the anesthesiologyType
*/

import AnesthesiologyTypeAPI from "../api/anesthesiologyType.js";

export const anesthesiologyType = {
    state: {
        anesthesiologyTypes: [],
        anesthesiologyTypesLoadStatus: 0,
        anesthesiologyType: {},
        anesthesiologyTypeLoadStatus: 0,
        anesthesiologyTypePagination: {},
        addAnesthesiologyTypeTypeLoadStatus: 0,
        addAnesthesiologyTypeTypeResult: {},
        updateAnesthesiologyTypeTypeLoadStatus: 0,
        updateAnesthesiologyTypeTypeResult: {},
        deleteAnesthesiologyTypeTypeLoadStatus: 0,
        deleteAnesthesiologyTypeTypeResult: {}
    },
    actions: {
        loadAnesthesiologyTypes({commit}, data) {
            commit('setAnesthesiologyTypesLoadStatus', 1);

            anesthesiologyTypeAPI.getAnesthesiologyTypeTypes(
                data.url
            ).then(function(response) {
                commit('setAnesthesiologyTypesLoadStatus', 2);
                commit('setAnesthesiologyTypes', response.data.data);
                commit('setAnesthesiologyTypePagination', {
                    meta: response.data.meta,
                    links: response.data.links
                });
            }).catch(function() {
                commit('setAnesthesiologyTypesLoadStatus', 3);
                commit('setAnesthesiologyTypes', []);
            });
        },

        loadAnesthesiologyType({commit}, data) {
            commit('setAnesthesiologyTypeLoadStatus', 1);

            anesthesiologyTypeAPI.getAnesthesiologyType(
                data.id
            ).then(function(response) {
                commit('setAnesthesiologyTypeLoadStatus', 2);
                commit('setAnesthesiologyType', response.data.data);
            }).catch(function() {
                commit('setAnesthesiologyTypeLoadStatus', 3);
                commit('setAnesthesiologyType', {});
            });
        },

        newAnesthesiologyType({commit}, data) {
            commit('setAddAnesthesiologyTypeLoadStatus', 1);

            anesthesiologyTypeAPI.addAnesthesiologyType(
                data.name
            ).then(function(response) {
                commit('setAddAnesthesiologyTypeLoadStatus', 2);
                commit('setAddAnesthesiologyTypeResult', response.data);
            }).catch(function() {
                commit('setAddAnesthesiologyTypeLoadStatus', 3);
                commit('setAddAnesthesiologyTypeResult', {
                    success: 0,
                    message: 'Something went wrong. Try again!'
                });
            });
        },

        editAnesthesiologyType({commit}, data) {
            commit('setUpdateAnesthesiologyTypeLoadStatus', 1);

            anesthesiologyTypeAPI.updateAnesthesiologyType(
                data.id,
                data.name
            ).then(function(response) {
                commit('setUpdateAnesthesiologyTypeLoadStatus', 2);
                commit('setUpdateAnesthesiologyTypeResult', response.data);
            }).catch(function() {
                commit('setUpdateAnesthesiologyTypeLoadStatus', 3);
                commit('setUpdateAnesthesiologyTypeResult', {
                    success: 0,
                    message: 'Something went wrong. Try again'
                });
            });
        },

        deleteAnesthesiologyType({commit}, data) {
            commit('setDeleteAnesthesiologyTypeLoadStatus', 1);

            anesthesiologyTypeAPI.deleteAnesthesiologyType(
                data.id
            ).then(function(response) {
                commit('setDeleteAnesthesiologyTypeLoadStatus', 2);
                commit('setDeleteAnesthesiologyTypeResult', response.data);
            }).catch(function() {
                commit('setDeleteAnesthesiologyTypeLoadStatus', 3);
                commit('setDeleteAnesthesiologyTypeResult', {
                    success: 0,
                    message: 'Something went wrong. Try again'
                });
            });
        }
    },
    mutations: {
        setAnesthesiologyTypes(state, anesthesiologyTypes) {
            state.anesthesiologyTypes = anesthesiologyTypes;
        }, 
        setAnesthesiologyTypesLoadStatus(state, anesthesiologyTypesLoadStatus) {
            state.anesthesiologyTypesLoadStatus = anesthesiologyTypesLoadStatus;
        },
        setAnesthesiologyType(state, anesthesiologyType) {
            state.anesthesiologyType = anesthesiologyType;
        },
        setAnesthesiologyTypeLoadStatus(state, status) {
            state.anesthesiologyTypeLoadStatus = status;
        },
        setAnesthesiologyTypePagination(state, data) {
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
        
            state.anesthesiologyTypePagination = pagination;
        },
        setAddAnesthesiologyTypeLoadStatus(state, status) {
            state.addAnesthesiologyTypeLoadStatus = status;
        }, 
        setAddAnesthesiologyTypeResult(state, result) {
            state.addAnesthesiologyTypeResult = result;
        },
        setUpdateAnesthesiologyTypeLoadStatus(state, status) {
            state.updateAnesthesiologyTypeLoadStatus = status;
        },
        setUpdateAnesthesiologyTypeResult(state, result) {
            state.updateAnesthesiologyTypeResult = result;
        },
        setDeleteAnesthesiologyTypeLoadStatus(state, status) {
            state.deleteAnesthesiologyTypeLoadStatus = status;
        },
        setDeleteAnesthesiologyTypeResult(state, result) {
            state.deleteAnesthesiologyTypeResult = result;
        }
    },
    getters: {
        getAnesthesiologyTypeTypes(state) {
            return state.anesthesiologyTypes;
        }, 
        getAnesthesiologyTypeTypesLoadStatus(state) {
            return state.anesthesiologyTypesLoadStatus;
        },
        getAnesthesiologyType(state) {
            return state.anesthesiologyType;
        },
        getAnesthesiologyTypeLoadStatus(state) {
            return state.anesthesiologyTypeLoadStatus;
        },
        getAnesthesiologyTypePagination(state) {
            return state.anesthesiologyTypePagination;
        },
        getAddAnesthesiologyTypeLoadStatus(state) {
            return state.addAnesthesiologyTypeLoadStatus;
        }, 
        getAddAnesthesiologyTypeResult(state) {
            return state.addAnesthesiologyTypeResult;
        },
        getUpdateAnesthesiologyTypeLoadStatus(state) {
            return state.updateAnesthesiologyTypeLoadStatus;
        },
        getUpdateAnesthesiologyTypeResult(state) {
            return state.updateAnesthesiologyTypeResult;
        },
        getDeleteAnesthesiologyTypeLoadStatus(state) {
            return state.deleteAnesthesiologyTypeLoadStatus;
        },
        getDeleteAnesthesiologyTypeResult(state) {
            return state.deleteAnesthesiologyTypeResult;
        }
    }
}