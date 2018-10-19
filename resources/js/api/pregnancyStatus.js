/*
* Imports the API URL from the config.
*/
import { CONFIG } from '../config.js';

export default {
    /**
     * display all resources
     * GET /api/v1/pregnancyStatuses
     */
    getPregnancyStatuses: function(url = null) {
        url = url || CONFIG.API_URL + "/pregnancyStatuses";
        return axios.get(url);
    },

    /**
     * display specified resources
     * GET /api/v1/pregnancyStatus/{id}
     */
    getPregnancyStatus: function(id) {
        url = CONFIG.API_URL + "/pregnancyStatus/" + id;
        return axios.get(url);
    },

    /**
     * add resource
     * POST /api/v1/pregnancyStatus
     */
    addPregnancyStatus: function(
        name
    ) {
        return axios.post(CONFIG.API_URL + '/pregnancyStatus', {
            name: name
        });
    },

    /**
     * update resource
     * PUT /api/v1/pregnancyStatus
     */
    updatePregnancyStatus: function(
        id,
        name
    ) {
        return axios.put(CONFIG.API_URL + '/pregnancyStatus', {
            id: id,
            name: name
        });
    },

    /**
     * delete resource
     * DELETE /api/v1/pregnancyStatus
     */
    deletepregnancyStatus: function(id) {
        return axios.delete( CONFIG.API_URL + '/pregnancyStatus', {
            params: {
                id: id
            }
        });
    }
};