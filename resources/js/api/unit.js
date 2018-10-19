/*
* Imports the API URL from the config.
*/
import { CONFIG } from '../config.js';

export default {
    /**
     * display all resources
     * GET /api/v1/units
     */
    getUnits: function(url = null) {
        url = url || CONFIG.API_URL + "/units";
        return axios.get(url);
    },

    /**
     * display specified resources
     * GET /api/v1/unit/{id}
     */
    getUnit: function(id) {
        url = CONFIG.API_URL + "/unit/" + id;
        return axios.get(url);
    },

    /**
     * add resource
     * POST /api/v1/unit
     */
    addUnit: function(
        name
    ) {
        return axios.post(CONFIG.API_URL + '/unit', {
            name: name
        });
    },

    /**
     * update resource
     * PUT /api/v1/unit
     */
    updateUnit: function(
        id,
        name
    ) {
        return axios.put(CONFIG.API_URL + '/unit', {
            id: id,
            name: name
        });
    },

    /**
     * delete resource
     * DELETE /api/v1/unit
     */
    deleteUnit: function(id) {
        return axios.delete( CONFIG.API_URL + '/unit', {
            params: {
                id: id
            }
        });
    }
};