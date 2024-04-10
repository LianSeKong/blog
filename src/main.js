import Vue from 'vue'
import App from './App.vue'

import router from './router'
import './styles/common.css'
import { showMessage } from './utils'
import './mock'


Vue.config.productionTip = false
Vue.prototype.$notify = showMessage
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
