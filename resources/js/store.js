/*
|-------------------------------------------------------------------------------
| VUEX store.js
|-------------------------------------------------------------------------------
| Builds the data store from all of the modules for the Election app.
*/

/*
Adds the promise polyfill for IE 11
*/
require('es6-promise').polyfill();

/*
Imports Vue and Vuex
*/
import Vue from 'vue';
import Vuex from 'vuex';

/*
Initializes Vuex on Vue.
*/
Vue.use( Vuex );

/*
    Imports all of the modules used in the application to build the data store.
*/
import { anesthesiologyType }  from './modules/anesthesiologyType';
import { appointment } from './modules/appointment';
import { appointmentStatus } from './modules/appointmentStatus';
import { appointmentType } from './modules/appointmentType';
import { charge } from './modules/charge';
import { inventory } from './modules/inventory';
import { inventoryType } from './modules/inventoryType';
import { medicalHistory } from './modules/medicalHistory';
import { patient } from './modules/patient';
import { pregnancy } from './modules/pregnancy';
import { pregnancyStatus } from './modules/pregnancyStatus';
import { previousPregnancy } from './modules/previousPregnancy';
import { procedure } from './modules/procedure';
import { procedureType } from './modules/procedureType';
import { role } from './modules/role';
import { unit } from './modules/unit';
import { user } from './modules/user';
import { visit } from './modules/visit';
import { visitNote } from './modules/visitNote';
import { visitStatus } from './modules/visitStatus';
import { visitType } from './modules/visitType';

/* 
Exports our data store.
*/
export default new Vuex.Store({
    modules: {
        anesthesiologyType,
        appointment,
        appointmentStatus,
        appointmentType,
        charge,
        inventory,
        inventoryType,
        medicalHistory,
        patient,
        pregnancy,
        pregnancyStatus,
        previousPregnancy,
        procedure,
        procedureType,
        role,
        unit,
        user,
        visit,
        visitNote,
        visitStatus,
        visitType
    }
});