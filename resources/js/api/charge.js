/*
* Imports the API URL from the config.
*/
import { CONFIG } from '../config.js';

export default {
    /**
     * display all resources
     * GET /api/v1/visit/{visit_id}/charges
     */
    getCharges: function(visit_id, url = null) {
        url = url || CONFIG.API_URL + "/visit/" + visit_id + "/charges";
        return axios.get(url);
    },

    /**
     * display specified resources
     * GET /api/v1/charge/{id}
     */
    getCharge: function(id) {
        url = CONFIG.API_URL + "/charge/" + id;
        return axios.get(url);
    },

    /**
     * add resource
     * POST /api/v1/charge
     */
    addCharges: function(
        visit_id,
        item,
        quantity
    ) {
        return axios.post(CONFIG.API_URL + '/charge', {
            visit_id: visit_id,
            item: item,
            quantity: quantity
        });
    },

    /**
     * update resource
     * PUT /api/v1/charge
     */
    updateCharges: function( 
        id,
        item,
        quantity
    ) {
        return axios.put(CONFIG.API_URL + '/charge', {
            id: id,
            item: item,
            quantity: quantity
        });
    },

    /**
     * delete resource
     * DELETE /api/v1/charge
     */
    deleteCharges: function(id) {
        return axios.delete( CONFIG.API_URL + '/charge', {
            params: {
                id: id
            }
        });
    }
};