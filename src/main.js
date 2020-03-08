import Vue from 'vue'
import App from './App.vue'

import About from './components/About.vue'
import Portfolio from './components/Portfolio.vue'
import Home from './components/Home.vue'

Vue.component('app-about',About)
Vue.component('app-portfolio',Portfolio)
Vue.component('app-home',Home)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
