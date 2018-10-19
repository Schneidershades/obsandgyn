/*
* Imports the API URL from the config.
*/
import { CONFIG } from '../config.js';

export default {
    /**
     * display all resources
     * GET /api/v1/visitTypes
     */
    getVisitTypes: function(url = null) {
        url = url || CONFIG.API_URL + "/visitTypes";
        return axios.get(url);
    },

    /**
     * display specified resources
     * GET /api/v1/visitType/{id}
     */
    getVisitType: function(id) {
        url = CONFIG.API_URL + "/visitType/" + id;
        return axios.get(url);
    },

    /**
     * add resource
     * POST /api/v1/visitType
     */
    addVisitType: function(
        name
    ) {
        return axios.post(CONFIG.API_URL + '/visitType', {
            name: name
        });
    },

    /**
     * update resource
     * PUT /api/v1/visitType
     */
    updateVisitType: function(
        id,
        name
    ) {
        return axios.put(CONFIG.API_URL + '/visitType', {
            id: id,
            name: name
        });
    },

    /**
     * delete resource
     * DELETE /api/v1/visitType
     */
    deleteVisitType: function(id) {
        return axios.delete( CONFIG.API_URL + '/visitType', {
            params: {
                id: id
            }
        });
    }
}