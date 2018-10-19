/*
* Imports the API URL from the config.
*/
import { CONFIG } from '../config.js';

export default {
    /**
     * display all resources
     * GET /api/v1/pregnancy/{pregnancy_id}/visits
     */
    getVisits: function(pregnancy_id, url = null) {
        url = url || CONFIG.API_URL + "/pregnancy/" + pregnancy_id + "/visits";
        return axios.get(url);
    },

    /**
     * display specified resources
     * GET /api/v1/visit/{id}
     */
    getVisit: function(id) {
        url = CONFIG.API_URL + "/visit/" + id;
        return axios.get(url);
    },

    /**
     * add resource
     * POST /api/v1/visit
     */
    addVisit: function(
        pregnancy_id,
        start_date,
        end_date,
        diagnosis,
        examiner,
        visit_type_id,
        visit_status_id
    ) {
        return axios.post(CONFIG.API_URL + '/visit', {
            pregnancy_id: pregnancy_id,
            start_date: start_date,
            end_date: end_date,
            diagnosis: diagnosis,
            examiner: examiner,
            visit_type_id: visit_type_id,
            visit_status_id: visit_status_id
        });
    },

    /**
     * update resource
     * PUT /api/v1/visit
     */
    updateVisit: function(
        id,
        end_date,
        diagnosis,
        examiner,
        visit_type_id,
        visit_status_id
    ) {
        return axios.put(CONFIG.API_URL + '/visit', {
            id: id,
            end_date: end_date,
            diagnosis: diagnosis,
            examiner: examiner,
            visit_type_id: visit_type_id,
            visit_status_id: visit_status_id
        });
    },

    /**
     * delete resource
     * DELETE /api/v1/visit
     */
    deleteVisit: function(id) {
        return axios.delete( CONFIG.API_URL + '/visit', {
            params: {
                id: id
            }
        });
    }
}