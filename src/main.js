import Vue from 'vue'
import axios from "axios";
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VModal from "vue-js-modal";

import App from './App.vue'

import { store } from "./store/store";

Vue.use(VueAwesomeSwiper);
Vue.use(VModal);

//EventBus
export const EventBus = new Vue();

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
