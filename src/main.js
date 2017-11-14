import Vue from 'vue'
import App from './App.vue'
import Autocomplete from './Autocomplete.vue';

new Vue({
  el: '#app',

  components: { Autocomplete },

  data: {
      cities : [
          'Bangalore','Chennai','Cochin',
          'Delhi','Kolkata','Mumbai'
      ],

      value: ''
  }

});