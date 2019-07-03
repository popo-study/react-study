import Vue from 'vue'
import App from './App.vue'
import baseComponent from './components/baseComponent';

Vue.config.productionTip = false
Vue.mixin(baseComponent);

new Vue({
  render: h => h(App),
}).$mount('#app')
