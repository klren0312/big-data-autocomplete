import Vue from 'vue'
import App from './App.vue'
import '@/assets/autocomplete.css'
import '@/assets/input.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
