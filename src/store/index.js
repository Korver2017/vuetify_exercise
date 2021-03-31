

/**
 *
 * User
 *
 */

// Import
import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import user from '@/store/modules/user.js'


Vue.use (Vuex)


/**
 *
 * Export
 *
 */
export default new Vuex.Store ({
  modules: {user},
});
