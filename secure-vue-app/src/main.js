import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.config.ignoredElements=[
  'auth0-login'
  ]

new Vue({
  render: h => h(App),
}).$mount('#app')
