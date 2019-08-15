import Vue from 'vue'
import App from './App.vue'
import { store } from "../store/store";

new Vue({
  el: '#app',
  store, // shortcut in ES6 for variable/property
  render: h => h(App)
});
