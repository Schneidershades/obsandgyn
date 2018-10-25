/*
* Imports the API URL from the config.
*/
import { CONFIG } from '../config.js';

export default {
    /**
     * display all resources
     * GET /api/v1/patient/{patient_id}/medicalHistories
     */
    getMedicalHistories: function(patient_id, url = null) {
        url = url || CONFIG.API_URL + "/patient/"+ patient_id + "/medicalHistories";
        return axios.get(url);
    },

    /**
     * display specified resources
     * GET /api/v1/medicalHistory/{id}
     */
    getMedicalHistory: function(id) {
        url = CONFIG.API_URL + "/medicalHistory/" + id;
        return axios.get(url);
    },

    /**
     * add resource
     * POST /api/v1/medicalHistory
     */
    addMedicalHistory: function(
        patient_id,
        remarks,
        lmp, 
        eod,
        gravida
    ) {
        return axios.post(CONFIG.API_URL + '/medicalHistory', {
            patient_id: patient_id,
            remarks: remarks,
            lmp: lmp,
            eod: eod,
            gravida: gravida
        });
    }, 

    /**
     * update resource
     * PUT /api/v1/medicalHistory
     */
    updateMedicalHistory: function(
        id,
        remarks,
        lmp, 
        eod,
        gravida
    ) {
        return axios.put(CONFIG.API_URL + '/medicalHistory', {
            id: id,
            remarks: remarks,
            lmp: lmp,
            eod: eod,
            gravida: gravida
        });
    },

    /**
     * delete resource
     * DELETE /api/v1/medicalHistory
     */
    deleteMedicalHistory: function(id) {
        return axios.delete( CONFIG.API_URL + '/medicalHistory', {
            params: {
                id: id
            }
        });
    }
}