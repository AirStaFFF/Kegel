import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './components/KegelProgramm'
var VueScrollTo = require('vue-scrollto');
import vClickOutside from 'v-click-outside'

Vue.use(vClickOutside)
Vue.use(VueScrollTo)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
