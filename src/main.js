import 'babel-polyfill'  
import Vue from 'vue'
import App from './App.vue'
import VueFilterDateFormat from 'vue-filter-date-format';
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default-dark.css' // This line here
//import 'vue-material/dist/theme/default.css'
Vue.use(VueFilterDateFormat);
Vue.use(VueMaterial)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

