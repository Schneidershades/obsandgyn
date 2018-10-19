/*
* Imports the API URL from the config.
*/
import { CONFIG } from '../config.js';

export default {
    /**
     * display all resources
     * GET /api/v1/visit/{visit_id}/procedures
     */
    getProcedures: function(visit_id, url = null) {
        url = url || CONFIG.API_URL + "/visit/" + visit_id + "/procedures";
        return axios.get(url);
    },

    /**
     * display specified resources
     * GET /api/v1/procedure/{id}
     */
    getProcedure: function(id) {
        url = CONFIG.API_URL + "/procedure/" + id;
        return axios.get(url);
    },

    /**
     * add resource
     * POST /api/v1/procedure
     */
    addProcedure: function(
        visit_id,
        procedure_type_id,
        location,
        start_date,
        end_date,
        physician,
        anesthesiologist,
        anesthesiology_type_id,
        notes
    ) {
        return axios.post(CONFIG.API_URL + '/procedure', {
            visit_id: visit_id,
            procedure_type_id: procedure_type_id,
            location: location,
            start_date: start_date,
            end_date: end_date,
            physician: physician,
            anesthesiologist: anesthesiologist,
            anesthesiology_type_id: anesthesiology_type_id,
            notes: notes
        });
    },

    /**
     * update resource
     * PUT /api/v1/procedure
     */
    updateProcedure: function(
        id,
        procedure_type_id,
        location,
        start_date,
        end_date,
        physician,
        anesthesiologist,
        anesthesiology_type_id,
        notes
    ) {
        return axios.put(CONFIG.API_URL + '/procedure', {
            id: id,
            procedure_type_id: procedure_type_id,
            location: location,
            start_date: start_date,
            end_date: end_date,
            physician: physician,
            anesthesiologist: anesthesiologist,
            anesthesiology_type_id: anesthesiology_type_id,
            notes: notes
        });
    },

    /**
     * delete resource
     * DELETE /api/v1/procedure
     */
    deleteProcedure: function(id) {
        return axios.delete( CONFIG.API_URL + '/procedure', {
            params: {
                id: id
            }
        });
    }
};