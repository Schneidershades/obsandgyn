/*
* Imports the API URL from the config.
*/
import { CONFIG } from '../config.js';

export default {
    /**
     * display all resources
     * GET /api/v1/appointmentTypes
     */
    getAppointmentTypes: function(url = null) {
        url = url || CONFIG.API_URL + "/appointmentTypes";
        return axios.get(url);
    },

    /**
     * display specified resources
     * GET /api/v1/appointmentType/{id}
     */
    getAppointmentType: function(id) {
        url = CONFIG.API_URL + "/appointmentType/" + id;
        return axios.get(url);
    },

    /**
     * add resource
     * POST /api/v1/appointmentType
     */
    addAppointmentType: function(
        name
    ) {
        return axios.post(CONFIG.API_URL + '/appointmentType', {
            name: name
        });
    },

    /**
     * update resource
     * PUT /api/v1/appointmentType
     */
    updateAppointmentType: function(
        id,
        name
    ) {
        return axios.put(CONFIG.API_URL + '/appointmentType', {
            id: id,
            name: name
        });
    },

    /**
     * delete resource
     * DELETE /api/v1/appointmentType
     */
    deleteAppointmentType: function(id) {
        return axios.delete( CONFIG.API_URL + '/appointmentType', {
            params: {
                id: id
            }
        });
    }
};