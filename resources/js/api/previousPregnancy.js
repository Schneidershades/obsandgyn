/*
* Imports the API URL from the config.
*/
import { CONFIG } from '../config.js';

export default {
    /**
     * display all resources
     * GET /api/v1/patient/{patient_id}/previousPregnancies
     */
    getPreviousPregnancies: function(patient_id, url = null) {
        url = url || CONFIG.API_URL + "/patient/" + patient_id + "/previousPregnancies";
        return axios.get(url);
    },

    /**
     * display specified resources
     * GET /api/v1/previousPregnancy/{id}
     */
    getPreviousPregnancy: function(id) {
        url = CONFIG.API_URL + "/previousPregnancy/" + id;
        return axios.get(url);
    },

    /**
     * add resource
     * POST /api/v1/previousPregnancy
     */
    addPreviousPregnancy: function(
        patient_id,
        year,
        duration,
        antenatal_complications,
        labour,
        age_if_alive,
        age_if_dead,
        cause_of_death
    ) {
        return axios.post(CONFIG.API_URL + '/previousPregnancy', {
            patient_id: patient_id,
            year: year,
            duration: duration,
            antenatal_complications: antenatal_complications,
            labour: labour,
            age_if_alive: age_if_alive,
            age_if_dead: age_if_dead,
            cause_of_death: cause_of_death
        });
    },

    /**
     * update resource
     * PUT /api/v1/previousPregnancy
     */
    updatePreviousPregnancy: function(
        id,
        year,
        duration,
        antenatal_complications,
        labour,
        age_if_alive,
        age_if_dead,
        cause_of_death
    ) {
        return axios.put(CONFIG.API_URL + '/previousPregnancy', {
            id: id,
            year: year,
            duration: duration,
            antenatal_complications: antenatal_complications,
            labour: labour,
            age_if_alive: age_if_alive,
            age_if_dead: age_if_dead,
            cause_of_death: cause_of_death
        });
    },

    /**
     * delete resource
     * DELETE /api/v1/previousPregnancy
     */
    deletePreviousPregnancy: function(id) {
        return axios.delete( CONFIG.API_URL + '/previousPregnancy', {
            params: {
                id: id
            }
        });
    }
};