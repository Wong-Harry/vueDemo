import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/styles/index.scss' // global css

import App from './App.vue'
import router from './router'
import store from './store'

import '@/permission' // permission control

Vue.config.productionTip = false
// 注册elementui
Vue.use(ElementUI)
console.log(process.env.VUE_APP_URL)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
