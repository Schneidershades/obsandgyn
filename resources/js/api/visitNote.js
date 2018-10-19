/*
* Imports the API URL from the config.
*/
import { CONFIG } from '../config.js';

export default {
    /**
     * display all resources
     * GET /api/v1/visit/{visit_id}/visitNotes
     */
    getVisitNotes: function(visit_id, url = null) {
        url = url || CONFIG.API_URL + "/visit/" + visit_id + "/visitNotes";
        return axios.get(url);
    },

    /**
     * display specified resources
     * GET /api/v1/visitNote/{id}
     */
    getVisitNote: function(id) {
        url = CONFIG.API_URL + "/visitNote/" + id;
        return axios.get(url);
    },

    /**
     * add resource
     * POST /api/v1/visitNote
     */
    addVisitNote: function(
        visit_id,
        note
    ) {
        return axios.post(CONFIG.API_URL + '/visitNote', {
            visit_id: visit_id,
            note: note
        });
    },

    /**
     * update resource
     * PUT /api/v1/visitNote
     */
    updateVisitNote: function(
        id,
        note
    ) {
        return axios.put(CONFIG.API_URL + '/visitNote', {
            id: id,
            note: note
        });
    },

    /**
     * delete resource
     * DELETE /api/v1/visitNote
     */
    deleteVisitNote: function(id) {
        return axios.delete( CONFIG.API_URL + '/visitNote', {
            params: {
                id: id
            }
        });
    }
}