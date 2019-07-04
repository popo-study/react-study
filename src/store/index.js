import Vue from 'vue';
import Vuex from 'vuex';
import VuexPromiseMiddleware from 'vuex-promise-middleware';

import common from './common';

Vue.use(Vuex);
const plugins = [VuexPromiseMiddleware];

const store = new Vuex.Store({
  plugins,
  modules: {
    common
  }
});

export default store;
