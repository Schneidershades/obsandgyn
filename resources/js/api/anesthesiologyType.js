/*
* Imports the API URL from the config.
*/
import { CONFIG } from '../config.js';

export default {
    /**
     * display all resources
     * GET /api/v1/anesthesiologyTypes
     */
    getAnesthesiologyTypes: function(url = null) {
        url = url || CONFIG.API_URL + "/anesthesiologyTypes";
        return axios.get(url);
    },

    /**
     * display specified resources
     * GET /api/v1/anesthesiologyType/{id}
     */
    getAnesthesiologyType: function(id) {
        url = CONFIG.API_URL + "/anesthesiologyType/" + id;
        return axios.get(url);
    },

    /**
     * add resource
     * POST /api/v1/anesthesiologyType
     */
    addAnesthesiologyType: function(
        name
    ) {
        return axios.post(CONFIG.API_URL + '/anesthesiologyType', {
            name: name
        });
    },

    /**
     * update resource
     * PUT /api/v1/anesthesiologyType
     */
    updateAnesthesiologyType: function(
        id,
        name
    ) {
        return axios.put(CONFIG.API_URL + '/anesthesiologyType', {
            id: id,
            name: name
        });
    },

    /**
     * delete resource
     * DELETE /api/v1/anesthesiologyType
     */
    deleteAnesthesiologyType: function(id) {
        return axios.delete( CONFIG.API_URL + '/anesthesiologyType', {
            params: {
                id: id
            }
        });
    }
}