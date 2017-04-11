import Vue from 'vue'
import VueRouter from 'vue-router'
import {routes} from './routes.js'
import axios from 'axios'
import App from './App.vue'

Vue.use(VueRouter);
Vue.prototype.$http = axios

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
