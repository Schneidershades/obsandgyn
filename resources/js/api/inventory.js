/*
* Imports the API URL from the config.
*/
import { CONFIG } from '../config.js';

export default {
    /**
     * display all resources
     * GET /api/v1/inventories
     */
    getInventories: function(url = null) {
        url = url || CONFIG.API_URL + "/inventories";
        return axios.get(url);
    },

    /**
     * display specified resources
     * GET /api/v1/inventory/{id}
     */
    getInventory: function(id) {
        url = CONFIG.API_URL + "/inventory/" + id;
        return axios.get(url);
    },

    /**
     * add resource
     * POST /api/v1/inventory
     */
    addInventory: function(
        name,
        inventory_type_id,
        quantity,
        unit_id,
        price,
        expiration
    ) {
        return axios.post(CONFIG.API_URL + '/inventory', {
            name: name,
            inventory_type_id: inventory_type_id,
            quantity: quantity,
            unit_id: unit_id,
            price: price,
            expiration: expiration
        });
    },

    /**
     * update resource
     * PUT /api/v1/inventory
     */
    updateInventory: function(
        id,
        name,
        inventory_type_id,
        quantity,
        unit_id,
        price,
        expiration
    ) {
        return axios.put(CONFIG.API_URL + '/inventory', {
            id: id,
            name: name,
            inventory_type_id: inventory_type_id,
            quantity: quantity,
            unit_id: unit_id,
            price: price,
            expiration: expiration
        });
    },

    /**
     * delete resource
     * DELETE /api/v1/inventory
     */
    deleteInventory: function(id) {
        return axios.delete( CONFIG.API_URL + '/inventory', {
            params: {
                id: id
            }
        });
    }
}