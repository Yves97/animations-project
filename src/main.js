import Vue from 'vue'
import App from './App.vue'

import About from './components/About.vue'
import Portfolio from './components/Portfolio.vue'

Vue.component('app-about',About)
Vue.component('app-portfolio',Portfolio)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
