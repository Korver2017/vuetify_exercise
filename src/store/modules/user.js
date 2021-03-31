

/**
 *
 * User
 *
 */


// Import

import api from '@/vendors/axios/loader.js';
import router from '@/router.js';


/**
 *
 * Export
 *
 */
export default {


  /**
   *
   * Namespace
   *
   */
  namespaced: true,


  /**
   *
   * State
   *
   */
  state: {
    authed: true,
    username: '',
    input: {
      username: '',
      password: '',
    }
  },


  /**
   *
   * Mutations
   *
   */
  mutations: {


    /**
     *
     * Authed
     *
     */
    authed (state, data) {
      if (state.authed === true) {
        state.authed = false;
        router.push ('/signin');
      } else {
        state.authed = data.authed;
        state.username = data.username;
      }
    },


    /**
     *
     * User signout
     *
     */
    signout (state) {
      state.authed = false;
    },


    /**
     *
     * Input datas
     *
     */
    input (state, input) {
      state.input.username = input.username || state.input.username || '';
      state.input.password = input.password || state.input.password || '';
    },
  },


  /**
   *
   * Actions
   *
   */
  actions: {


    /**
     *
     * User signin
     *
     */
    signin: function ({ state, commit }) {
      let data = {};

      data.username = state.input.username;
      data.password = state.input.password;

      api.post ('https://virtserver.swaggerhub.com/Korver2017/ESSR-Mocking-API/1.0.0/auth', data)
        .then (resp => {
          let user = resp.data;
          
          if (user.username === data.username && user.password === data.username) {
            data.authed = true;
            commit ('authed', data);
            router.push ('/');
          }
          else {
            alert ('帳號或密碼錯誤!');
            state.input.username = '';
            state.input.password = '';
            return;
          }
        });
    },


    /**
     *
     * User logOut
     *
     */
    logOut: function ({ state, commit }) {
      state.input.username = '';
      state.input.password = '';
      commit ('authed');
      router.push ('/signin');
    },
  }
}
