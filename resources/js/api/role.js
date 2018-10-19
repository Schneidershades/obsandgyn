/*
* Imports the API URL from the config.
*/
import { CONFIG } from '../config.js';

export default {
    /**
     * display all resources
     * GET /api/v1/roles
     */
    getRoles: function(url = null) {
        url = url || CONFIG.API_URL + "/roles";
        return axios.get(url);
    },

    /**
     * display specified resources
     * GET /api/v1/role/{id}
     */
    getRole: function(id) {
        return axios.get(CONFIG.API_URL + "/role/" + id);
    }

    /**
     * add resource
     */

    /**
     * update resource
     */

    /**
     * delete resource
     */
};