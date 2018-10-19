/*
* Imports the API URL from the config.
*/
import { CONFIG } from '../config.js';

export default {
    /**
     * display all resources
     * GET /api/v1/inventoryTypes
     */
    getInventoryTypes: function(url = null) {
        url = url || CONFIG.API_URL + "/inventoryTypes";
        return axios.get(url);
    },

    /**
     * display specified resources
     * GET /api/v1/inventoryType/{id}
     */
    getInventoryType: function(id) {
        url = CONFIG.API_URL + "/inventoryType/" + id;
        return axios.get(url);
    },

    /**
     * add resource
     * POST /api/v1/inventoryType
     */
    addInventoryType: function(
        name
    ) {
        return axios.post(CONFIG.API_URL + '/inventoryType', {
            name: name
        });
    },

    /**
     * update resource
     * PUT /api/v1/inventoryType
     */
    updateInventoryType: function(
        id,
        name
    ) {
        return axios.put(CONFIG.API_URL + '/inventoryType', {
            id: id,
            name: name
        });
    },

    /**
     * delete resource
     * DELETE /api/v1/inventoryType
     */
    deleteInventoryType: function(id) {
        return axios.delete( CONFIG.API_URL + '/inventoryType', {
            params: {
                id: id
            }
        });
    }
}