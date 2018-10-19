/*
* Imports the API URL from the config.
*/
import { CONFIG } from '../config.js';

export default {
    /**
     * display all resources
     * GET /api/v1/visitStatuses
     */
    getVisitStatuses: function(url = null) {
        url = url || CONFIG.API_URL + "/visitStatuses";
        return axios.get(url);
    },

    /**
     * display specified resources
     * GET /api/v1/visitStatus/{id}
     */
    getVisitStatus: function(id) {
        url = CONFIG.API_URL + "/visitStatus/" + id;
        return axios.get(url);
    },

    /**
     * add resource
     * POST /api/v1/visitStatus
     */
    addVisitStatus: function(
        name
    ) {
        return axios.post(CONFIG.API_URL + '/visitStatus', {
            name: name
        });
    },

    /**
     * update resource
     * PUT /api/v1/visitStatus
     */
    updateVisitStatus: function(
        id,
        name
    ) {
        return axios.put(CONFIG.API_URL + '/visitStatus', {
            id: id,
            name: name
        });
    },

    /**
     * delete resource
     * DELETE /api/v1/visitStatus
     */
    deleteVisitStatus: function(id) {
        return axios.delete( CONFIG.API_URL + '/visitStatus', {
            params: {
                id: id
            }
        });
    }
}