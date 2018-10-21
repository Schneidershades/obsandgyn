
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import router from './routes.js';
import store from './store.js';

//https://www.npmjs.com/package/vue-chartkick
//https://chartkick.com/vue
import VueChartkick from 'vue-chartkick';

//https://www.npmjs.com/package/highcharts
import Highcharts from 'highcharts';

//https://www.npmjs.com/package/vue-router-back-button
import { writeHistory } from 'vue-router-back-button';
router.afterEach(writeHistory);
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

//https://www.npmjs.com/package/vue-chartkick
Vue.use(VueChartkick, {adapter: Highcharts});

new Vue({
    router,
    store
}).$mount('#app');
