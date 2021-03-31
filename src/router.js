

/**
 *
 * Helper
 *
 */

// Import
import Vue from 'vue'
import Router from 'vue-router'

// Use router
Vue.use (Router)

// Export
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [

    // Home (首頁)
    {
      path: '/',
      name: 'Home',
      component: () => import ('@/views/home.vue')
    },

    // About (關於我)
    {
      path: '/about',
      name: 'About',
      component: () => import ('@/views/about.vue')
    },
  ]
})
