import Vue from 'vue'
import App from './App.vue'
import base from './components/base';

Vue.config.productionTip = false
Vue.mixin(base);

new Vue({
  render: h => h(App),
}).$mount('#app')
