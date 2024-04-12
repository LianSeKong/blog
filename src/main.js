import Vue from 'vue'
import App from './App.vue'

import router from './router'
import './styles/common.css'
import { showMessage } from './utils'
import './mock'

// 自定义指令
import loading from './directives/loading'

Vue.directive('loading', loading)

Vue.config.productionTip = false
Vue.prototype.$notify = showMessage

		//定义全局指令
		/* Vue.directive('fbind',{
			//指令与元素成功绑定时（一上来）
			bind(element,binding){
				element.value = binding.value
			},
			//指令所在元素被插入页面时
			inserted(element,binding){
				element.focus()
			},
			//指令所在的模板被重新解析时
			update(element,binding){
				element.value = binding.value
			}
		}) */

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
