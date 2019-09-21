import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Default from './layouts/Default.vue'
import PublicLayout from './layouts/PublicLayout.vue'

Vue.config.productionTip = false

Vue.component('DefaultLayout', Default)
Vue.component('PublicLayout', PublicLayout)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
