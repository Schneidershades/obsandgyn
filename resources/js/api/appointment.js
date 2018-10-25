/*
* Imports the API URL from the config.
*/
import { CONFIG } from '../config.js';

export default { 
    /**
     * display all resources
     * GET /api/v1/appointments
     */
    getAppointments: function(url = null) {
        url = url || CONFIG.API_URL + "/appointments";
        return axios.get(url);
    },

    /**
     * display specified resources
     * GET /api/v1/appointment/{id}
     */
    getAppointment: function(id) {
        url = CONFIG.API_URL + "/appointment/" + id;
        return axios.get(url);
    },

    /**
     * add resource
     * POST /api/v1/appointment
     */
    addAppointment: function(
        patient_id,
        start_date,
        end_date,
        examiner,
        location,
        appointment_type_id,
        appointment_status_id,
        notes
    ) {
        return axios.post(CONFIG.API_URL + '/appointment', {
            patient_id: patient_id,
            start_date: start_date,
            end_date: end_date,
            examiner: examiner,
            location: location,
            appointment_type_id: appointment_type_id,
            appointment_status_id: appointment_status_id,
            notes: notes
        });
    },

    /**
     * update resource
     * PUT /api/v1/appointment
     */
    updateAppointment: function(
        id,
        start_date,
        end_date,
        examiner,
        location,
        appointment_type_id,
        appointment_status_id,
        notes
    ) {
        return axios.put(CONFIG.API_URL + '/appointment', {
            id: id,
            start_date: start_date,
            end_date: end_date,
            examiner: examiner,
            location: location,
            appointment_type_id: appointment_type_id,
            appointment_status_id: appointment_status_id,
            notes: notes
        });
    },

    /**
     * delete resource
     * DELETE /api/v1/appointment
     */
    deleteAppointment: function(id) {
        return axios.delete( CONFIG.API_URL + '/appointment', {
            params: {
                id: id
            }
        });
    }
};