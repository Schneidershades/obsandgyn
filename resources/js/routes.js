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
                }
            ]
        }
    ]
});