import Vue from 'vue'
import VueResource from "vue-resource"
import VueAwesomeSwiper from 'vue-awesome-swiper'
import { store } from "./store/store"
import VModal from "vue-js-modal"
import App from './App.vue'

Vue.use(VueResource);
Vue.use(VueAwesomeSwiper);
Vue.use(VModal);

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
