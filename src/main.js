

  /**
   *
   * Import from vendors
   *
   */

  // Vue
  import Vue from 'vue';

  // Bootstrap
  import 'bootstrap/dist/css/bootstrap.css';
  import 'bootstrap/dist/js/bootstrap.js';


  /**
   *
   * Import from files
   *
   */

  // Script
  import app from '@/App.vue';
  import router from '@/router';
  import api from '@/vendors/axios/loader.js';
  import store from '@/store';


  /**
  *
  * Vue global & config & plugin
  *
  */
  Vue.config.productionTip = false;
  Vue.prototype.$api = api;


  /**
  *
  * Vue instance
  *
  */
  new Vue({
    router,
    store,
    render: h => h(app)
  }).$mount('#app')
