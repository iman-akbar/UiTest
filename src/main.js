import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

Vue.config.productionTip = false
library.add(faUserSecret)
library.add(faLocationDot)
library.add(faPhone)
library.add(faEnvelope)
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
