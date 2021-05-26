import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import '@mdi/font/css/materialdesignicons.css'
import VueScrollTo from "vue-scrollto"
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  VueScrollTo,
  render: h => h(App)
}).$mount('#app')
