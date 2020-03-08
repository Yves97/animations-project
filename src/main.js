import Vue from 'vue'
import App from './App.vue'

import About from './components/About.vue'
import Portfolio from './components/Portfolio.vue'
import Home from './components/Home.vue'
import Footer from './components/Footer'
import AboutContent from './components/About-content'

Vue.component('app-about',About)
Vue.component('app-portfolio',Portfolio)
Vue.component('app-home',Home)
Vue.component('app-footer',Footer)
Vue.component('about-content',AboutContent)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
