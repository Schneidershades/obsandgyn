/*
|-------------------------------------------------------------------------------
| VUEX modules/visitNote.js
|-------------------------------------------------------------------------------
| The Vuex data store for the visitNote
*/

import VisitNoteAPI from '../api/visitNote.js'; 

export const visitNote = {
    state: {
        visitNotes: [],
        visitNotesLoadStatus: 0,
        visitNote: {},
        visitNoteLoadStatus: 0,
        visitNotePagination: {},
        addVisitNoteLoadStatus: 0,
        addVisitNoteResult: {},
        updateVisitNoteLoadStatus: 0,
        updateVisitNoteResult: {},
        deleteVisitNoteLoadStatus: 0,
        deleteVisitNoteResult: {}
    },
    actions: {
        loadVisitNotes({commit}, data) {
            commit('setVisitNotesLoadStatus', 1);

            VisitNoteAPI.getVisitNotes(
                data.url
            ).then(function(response) {
                commit('setVisitNotesLoadStatus', 2);
                commit('setVisitNotes', response.data.data);
                commit('setVisitNotePagination', {
                    meta: response.data.meta,
                    links: response.data.links
                });
            }).catch(function() {
                commit('setVisitNotesLoadStatus', 3);
                commit('setVisitNotes', []);
            });
        },

        loadVisitNote({commit}, data) {
            commit('setVisitNoteLoadStatus', 1);

            VisitNoteAPI.getVisitNote(
                data.id
            ).then(function(response) {
                commit('setVisitNoteLoadStatus', 2);
                commit('setVisitNote', response.data.data);
            }).catch(function() {
                commit('setVisitNoteLoadStatus', 3);
                commit('setVisitNote', {});
            });
        },

        newVisitNote({commit}, data) {
            commit('setAddVisitNoteLoadStatus', 1);

            VisitNoteAPI.addVisitNote(
                data.visit_id,
                data.note
            ).then(function(response) {
                commit('setAddVisitNoteLoadStatus', 2);
                commit('setAddVisitNoteResult', response.data);
            }).catch(function() {
                commit('setAddVisitNoteLoadStatus', 3);
                commit('setAddVisitNoteResult', {
                    success: 0,
                    message: 'Something went wrong. Try again!'
                });
            });
        },

        editVisitNote({commit}, data) {
            commit('setUpdateVisitNoteLoadStatus', 1);

            VisitNoteAPI.updateVisitNote(
                data.id,
                data.note
            ).then(function(response) {
                commit('setUpdateVisitNoteLoadStatus', 2);
                commit('setUpdateVisitNoteResult', response.data);
            }).catch(function() {
                commit('setUpdateVisitNoteLoadStatus', 3);
                commit('setUpdateVisitNoteResult', {
                    success: 0,
                    message: 'Something went wrong. Try again'
                });
            });
        },

        deleteVisitNote({commit}, data) {
            commit('setDeleteVisitNoteLoadStatus', 1);

            VisitNoteAPI.deleteVisitNote(
                data.id
            ).then(function(response) {
                commit('setDeleteVisitNoteLoadStatus', 2);
                commit('setDeleteVisitNoteResult', response.data);
            }).catch(function() {
                commit('setDeleteVisitNoteLoadStatus', 3);
                commit('setDeleteVisitNoteResult', {
                    success: 0,
                    message: 'Something went wrong. Try again'
                });
            });
        }
    },
    mutations: {
        setVisitNotes(state, visitNotes) {
            state.visitNotes = visitNotes;
        }, 
        setVisitNotesLoadStatus(state, visitNotesLoadStatus) {
            state.visitNotesLoadStatus = visitNotesLoadStatus;
        },
        setVisitNote(state, visitNote) {
            state.visitNote = visitNote;
        },
        setVisitNoteLoadStatus(state, status) {
            state.visitNoteLoadStatus = status;
        },
        setVisitNotePagination(state, data) {
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
        
            state.visitNotePagination = pagination;
        },
        setAddVisitNoteLoadStatus(state, status) {
            state.addVisitNoteLoadStatus = status;
        }, 
        setAddVisitNoteResult(state, result) {
            state.addVisitNoteResult = result;
        },
        setUpdateVisitNoteLoadStatus(state, status) {
            state.updateVisitNoteLoadStatus = status;
        },
        setUpdateVisitNoteResult(state, result) {
            state.updateVisitNoteResult = result;
        },
        setDeleteVisitNoteLoadStatus(state, status) {
            state.deleteVisitNoteLoadStatus = status;
        },
        setDeleteVisitNoteResult(state, result) {
            state.deleteVisitNoteResult = result;
        }
    },
    getters: {
        getVisitNotes(state) {
            return state.visitNotes;
        }, 
        getVisitNotesLoadStatus(state) {
            return state.visitNotesLoadStatus;
        },
        getVisitNote(state) {
            return state.visitNote;
        },
        getVisitNoteLoadStatus(state) {
            return state.visitNoteLoadStatus;
        },
        getVisitNotePagination(state) {
            return state.visitNotePagination;
        },
        getAddVisitNoteLoadStatus(state) {
            return state.addVisitNoteLoadStatus;
        }, 
        getAddVisitNoteResult(state) {
            return state.addVisitNoteResult;
        },
        getUpdateVisitNoteLoadStatus(state) {
            return state.updateVisitNoteLoadStatus;
        },
        getUpdateVisitNoteResult(state) {
            return state.updateVisitNoteResult;
        },
        getDeleteVisitNoteLoadStatus(state) {
            return state.deleteVisitNoteLoadStatus;
        },
        getDeleteVisitNoteResult(state) {
            return state.deleteVisitNoteResult;
        }
    }
};