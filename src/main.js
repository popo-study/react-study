import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import baseComponent from './components/baseComponent';

Vue.config.productionTip = false
Vue.mixin(baseComponent);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
