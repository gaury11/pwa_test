// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import './plugins/vuetify'
import App from './App'
import router from './router'
import './registerServiceWorker'
// vue add @vue/pwa

Vue.config.productionTip = false

Vue.prototype.$API_URL = 'http://localhost:9090'

/*
Vue.use(Vuetify, {
  iconfont: 'md' // 'md' || 'mdi' || 'fa' || 'fa4'
})
*/


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  iconfont: 'mdi',
  template: '<App/>',
  components: { App },
  data() {
    return {

    }
  }
});