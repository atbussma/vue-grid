import Vue from "vue";
import store from './store';
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  el: '#app',           // page element id to bind the Vue instance to
  store,                // inject Vuex store to all children Vue instances (vm = view-models)
  render: h => h(App),  // render the App component
});