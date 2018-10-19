/*
* Imports the API URL from the config.
*/
import { CONFIG } from '../config.js';

export default {
    /**
     * display all resources
     * GET /api/v1/procedureTypes
     */
    getProcedureTypes: function(url = null) {
        url = url || CONFIG.API_URL + "/procedureTypes";
        return axios.get(url);
    },

    /**
     * display specified resources
     * GET /api/v1/procedureType/{id}
     */
    getProcedureType: function(id) {
        url = CONFIG.API_URL + "/procedureType/" + id;
        return axios.get(url);
    },

    /**
     * add resource
     * POST /api/v1/procedureType
     */
    addProcedureType: function(
        name
    ) {
        return axios.post(CONFIG.API_URL + '/procedureType', {
            name: name
        });
    },

    /**
     * update resource
     * PUT /api/v1/procedureType
     */
    updateProcedureType: function(
        id,
        name
    ) {
        return axios.put(CONFIG.API_URL + '/procedureType', {
            id: id,
            name: name
        });
    },

    /**
     * delete resource
     * DELETE /api/v1/procedureType
     */
    deleteProcedureType: function(id) {
        return axios.delete( CONFIG.API_URL + '/procedureType', {
            params: {
                id: id
            }
        });
    }
};