/*
* Imports the API URL from the config.
*/
import { CONFIG } from '../config.js';

export default {
    /**
     * display all resources
     * GET /api/v1/appointmentStatuses
     */
    getAppointmentStatuses: function(url = null) {
        url = url || CONFIG.API_URL + "/appointmentStatuses";
        return axios.get(url);
    },

    /**
     * display specified resources
     * GET /api/v1/appointmentStatus/{id}
     */
    getAppointmentStatus: function(id) {
        url = CONFIG.API_URL + "/appointmentStatus/" + id;
        return axios.get(url);
    },

    /**
     * add resource
     * POST /api/v1/appointmentStatus
     */
    addAppointmentStatus: function(
        name
    ) {
        return axios.post(CONFIG.API_URL + '/appointmentStatus', {
            name: name
        });
    },

    /**
     * update resource
     * PUT /api/v1/appointmentStatus
     */
    updateAppointmentStatus: function(
        id,
        name
    ) {
        return axios.put(CONFIG.API_URL + '/appointmentStatus', {
            id: id,
            name: name
        });
    },

    /**
     * delete resource
     * DELETE /api/v1/appointmentStatus
     */
    deleteAppointmentStatus: function(id) {
        return axios.delete( CONFIG.API_URL + '/appointmentStatus', {
            params: {
                id: id
            }
        });
    }
};