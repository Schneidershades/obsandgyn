/*
* Imports the API URL from the config.
*/
import { CONFIG } from '../config.js';

export default {
    /**
     * display all resources
     * GET /api/v1/patient/{patient_id}/pregnancies
     */
    getPregnancies: function(patient_id, url = null) {
        url = url || CONFIG.API_URL + "/patient/" + patient_id + "/pregnancies";
        return axios.get(url); 
    },

    /**
     * display specified resources
     * GET /api/v1/pregnancy/{id}
     */
    getPregnancy: function(id) {
        url = CONFIG.API_URL + "/pregnancy/" + id;
        return axios.get(url);
    },

    /**
     * add resource
     * POST /api/v1/pregnancy
     */
    addPregnancy: function(
        patient_id,
        last_period_date,
        delivery_date,
        pregnancy_status_id,
        notes
    ) {
        return axios.post(CONFIG.API_URL + '/pregnancy', {
            patient_id: patient_id,
            last_period_date: last_period_date,
            delivery_date: delivery_date,
            pregnancy_status_id: pregnancy_status_id,
            notes: notes
        });
    },

    /**
     * update resource
     * PUT /api/v1/pregnancy
     */
    updatePregnancy: function(
        id,
        last_period_date,
        delivery_date,
        pregnancy_status_id,
        notes
    ) {
        return axios.put(CONFIG.API_URL + '/pregnancy', {
            id: id,
            last_period_date: last_period_date,
            delivery_date: delivery_date,
            pregnancy_status_id: pregnancy_status_id,
            notes: notes
        });
    },

    /**
     * delete resource
     * DELETE /api/v1/pregnancy
     */
    deletePregnancy: function(id) {
        return axios.delete( CONFIG.API_URL + '/pregnancy', {
            params: {
                id: id
            }
        });
    }
};