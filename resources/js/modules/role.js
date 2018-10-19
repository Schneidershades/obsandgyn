/*
|-------------------------------------------------------------------------------
| VUEX modules/role.js
|-------------------------------------------------------------------------------
| The Vuex data store for the role
*/

import RoleAPI from '../api/role.js'; 

export const role = {
    state: {
        roles: [],
        rolesLoadStatus: 0,
    },
    actions: {
        loadRoles({commit}) {
            commit('setRolesLoadStatus', 1);

            RoleAPI.getRoles()
                .then(function(response) {
                    commit('setRolesLoadStatus', 2);
                    commit('setRoles', response.data.data);
                })
                .catch(function() {
                    commit('setRolesLoadStatus', 3);
                    commit('setRoles', []);
                });
        }
    },
    mutations: {
        setRolesLoadStatus(state, status) {
            state.rolesLoadStatus = status;
        },

        setRoles(state, roles) {
            state.roles = roles;
        }
    },
    getters: {
        getRolesLoadStatus(state) {
            return state.rolesLoadStatus;
        },

        getRoles(state) {
            return state.roles;
        }
    }
};