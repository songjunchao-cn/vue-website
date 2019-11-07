import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Modal from './components/modal/export'
import * as imgUrls from './components/imgurls'

Vue.config.productionTip = false
Vue.prototype.$imgUrls = imgUrls
Vue.use(Modal)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
