import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import vuetify from './plugins/vuetify.js'
import bootstrap from './plugins/bootstrap.js'

Vue.config.productionTip = false
Vue.use(Vuetify)

new Vue({
  vuetify,
  bootstrap,
  render: h => h(App),
}).$mount('#app')
