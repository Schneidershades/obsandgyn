/*
* Imports the API URL from the config.
*/
import { CONFIG } from '../config.js';

export default {
    /**
     * display all resources
     * GET /api/v1/patients
     */
    getPatients: function(url = null) {
        url = url || CONFIG.API_URL + "/patients";
        return axios.get(url);
    },

    /**
     * display specified resources
     * GET /api/v1/patient/{id}
     */
    getPatient: function(id) {
        url = CONFIG.API_URL + "/patient/" + id;
        return axios.get(url);
    },

    /**
     * add resource
     * POST /api/v1/patient
     */
    addPatient: function(
        name,
        address,
        religion,
        birth_date,
        tribe,
        husband_occupation
    ) {
        return axios.post(CONFIG.API_URL + '/patient', {
            name: name,
            address: address,
            religion: religion,
            birth_date: birth_date,
            tribe: tribe,
            husband_occupation: husband_occupation
        });
    },

    /**
     * update resource
     * PUT /api/v1/patient
     */
    updatePatient: function(
        id,
        address,
        religion,
        birth_date,
        tribe,
        husband_occupation
    ) {
        return axios.put(CONFIG.API_URL + '/patient', {
            id: id,
            address: address,
            religion: religion,
            birth_date: birth_date,
            tribe: tribe,
            husband_occupation: husband_occupation
        });
    },

    /**
     * delete resource
     * DELETE /api/v1/patient
     */
    deletePatient: function(id) {
        return axios.delete( CONFIG.API_URL + '/patient', {
            params: {
                id: id
            }
        });
    }
};