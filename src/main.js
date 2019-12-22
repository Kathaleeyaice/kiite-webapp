import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BProgress, ProgressPlugin } from 'bootstrap-vue'
import io from 'socket.io-client'

Vue.config.productionTip = false

// FILTERS
Vue.filter('snippet', function (value) {
  return value.slice(0, 100)
})

Vue.component('LoginScreen', {
  template: '<div id="loading">Loading...</div>'
})

Vue.component('b-progress', BProgress)

Vue.use(ProgressPlugin)

new Vue({
  router,
  store,
  render: h => h(App),
  data: {
    isLoading: true,
    socket: io('https://kiite-webservice.herokuapp.com')
  },
  mounted () {
    setTimeout(() => {
      this.isLoading = false
    }, 60000)
  }
}).$mount('#app')
