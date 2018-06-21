// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import _ from 'lodash';
import Vue from 'vue';
import App from './App';
import store from './store';
import router from './router';
import * as filters from './filters';

Vue.config.productionTip = false;

_.map(filters, (value, key) => {
  Vue.filter(key, value);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
});
