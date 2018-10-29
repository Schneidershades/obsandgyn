/*
|-------------------------------------------------------------------------------
| routes.js
|-------------------------------------------------------------------------------
| Contains all of the routes for the application
*/

/*
    Imports Vue and VueRouter to extend with the routes.
*/
import Vue from 'vue';
import VueRouter from 'vue-router';
import { routerHistory } from 'vue-router-back-button';

import store from './store.js';

/*
    Extends Vue to use Vue Router
*/
Vue.use( VueRouter );
Vue.use(routerHistory);

/*
	This will cehck to see if the user is authenticated or not.
*/
function requireAuth (to, from, next) {
	/*
		Determines where we should send the user.
	*/
	function proceed () {
		/*
			If the user has been loaded determine where we should
			send the user.
		*/
        if ( store.getters.getUserLoadStatus == 2 ) { 
            /*
                If the user is not empty, that means there's a user
                authenticated we allow them to continue. Otherwise, we
                send the user back to the home page.
            */
            if( store.getters.getUser != '' ) {
                let roles = store.getters.getUser.roles;
                let permitted = to.meta.permitted;
                let flag = false;

                roles.forEach(role => {
                    if(permitted.includes(role)) {
                        flag = true;
                    }
                });

                switch( flag ){
                    /*
                        If flag is true, then we continue.
                    */
                    case true:
                        next();
                        break;
                    /*
                        If flag is false, then we continue.
                    */
                    case false:
                        console.log(flag);
                        break;
                    default:
                        break;
                }
            } else {
                //user needs to login first
            }
        } else if(store.getters.getUserLoadStatus == 3) {
            //user is not logged in
        }
    }
    
    proceed();
}

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: Vue.component('Layout', require('./pages/layouts/Layout.vue')),
            children: [ 
                {
                    path: '',
                    name: 'Home',
                    component: Vue.component('Home', require('./pages/Home.vue'))
                },
                { 
                    path: 'users',
                    component: Vue.component('Users', require('./pages/Users.vue')),
                    children: [
                        {
                            path: '',
                            name: 'Users',
                            component: Vue.component(
                                'BrowseUsers',
                                require('./components/users/BrowseUsers.vue')
                            ),
                            beforeEnter: requireAuth,
							meta: {
								permitted: ['Super-admin']
                            }
                        },
                        {
                            path: 'edit/:userId',
                            name: 'Edit User',
                            component: Vue.component(
                                'EditUser', 
                                require('./components/users/EditUser.vue')
                            ),
                            beforeEnter: requireAuth,
							meta: {
								permitted: ['Super-admin']
                            }
                        },
                        {
                            path: 'add',
                            name: 'Add User',
                            component: Vue.component(
                                'AddUser', 
                                require('./components/users/AddUser.vue')
                            ),
                            beforeEnter: requireAuth,
							meta: {
								permitted: ['Super-admin']
                            }
                        }
                    ]
                },
                {
                    path: 'inventory',
                    component: Vue.component('Inventory', require('./pages/Inventory.vue')),
                    children: [
                        {
                            path: '',
                            name: 'Inventories',
                            component: Vue.component(
                                'BrowseInventory',
                                require('./components/inventory/Browse.vue')
                            )
                        }
                    ]
                },
                {
                    path: 'patient',
                    component: Vue.component('Patient', require('./pages/Patient.vue')),
                    children: [
                        {
                            path: '',
                            name: 'Patients',
                            component: Vue.component(
                                'BrowsePatients',
                                require('./components/patient/Browse.vue')
                            )
                        },
                        {
                            path: 'view/:patientId',
                            name: 'View Patient',
                            component: Vue.component(
                                'ViewPatient', 
                                require('./components/patient/View.vue')
                            )
                        },
                        {
                            path: 'add',
                            name: 'New Patient',
                            component: Vue.component(
                                'AddPatient',
                                require('./components/patient/Add.vue')
                            )
                        },
                        {
                            path: 'edit/:editId',
                            name: 'Edit Patient',
                            component: Vue.component(
                                'EditPatient',
                                require('./components/patient/Edit.vue')
                            )
                        }
                    ]
                },
                {
                    path: 'appointment',
                    component: Vue.component('Appointment', require('./pages/Appointment.vue')),
                    children: [
                        {
                            path: '',
                            name: 'Appointments',
                            component: Vue.component(
                                'BrowseAppointments',
                                require('./components/appointment/Browse.vue')
                            )
                        }
                    ]
                },
                {
                    path: 'billing',
                    component: Vue.component('Billing', require('./pages/Billing.vue')),
                    children: [
                        {
                            path: '',
                            name: 'Billings',
                            component: Vue.component(
                                'BrowseBillings',
                                require('./components/billing/Browse.vue')
                            )
                        }
                    ]
                },
                {
                    path: 'administration',
                    name: 'Administration',
                    component: Vue.component('Administration', require('./pages/Administration.vue'))
                },
                {
                    path: 'getting-started',
                    name: 'GettingStarted',
                    component: Vue.component('GettingStarted', require('./pages/GettingStarted.vue'))
                }
            ]
        }
    ]
});