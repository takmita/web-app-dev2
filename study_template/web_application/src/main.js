import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { sync } from './router/gasRouterSync'
import gas from './plugins/gas'
import store from '@/store'
sync(router)

Vue.use(gas)
Vue.config.productionTip = false

Vue.config.errorHandler = function (e, vm, info) {
  console.log('ERROR: err :', e)
  console.log('ERROR: vm  :', vm)
  console.log('ERROR: info:', info)
  router.push({ path: '/errorPage' })
  return false
}

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
