<!--
  *
  * Template
  *
  -->
<template>
  <div id="app">
    <v-app>
      <v-main>
        <v-container>
          <Alert />
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>


<!--
  *
  * Script
  *
  -->
<script>

  // Components
  import Alert from './components/Alert';

  // Component
  export default {


    /**
     *
     * Component name
     *
     */
    name: 'App',


    /**
     *
     * Inner components
     *
     */
    components: {
      Alert,
    },


    /**
     *
     * Props
     *
     */
    props: [],


    /**
     *
     * Data
     *
     */
    data () {
      return {
      }
    },


    /**
     *
     * Computed
     *
     */
    computed: {
    },


    /**
     *
     * Methods
     *
     */
    methods: {
    }
  }
</script>
