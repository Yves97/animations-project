import Vue from 'vue'
import App from './App.vue'

import About from './components/About'
import Portfolio from './components/Portfolio'
import Home from './components/Home'
import Footer from './components/Footer'
import AboutContent from './components/About-content'
import AgencyContent from './components/Agency-content'
import PortfolioContent from './components/Portfolio-content'

Vue.component('app-about',About)
Vue.component('app-portfolio',Portfolio)
Vue.component('app-home',Home)
Vue.component('app-footer',Footer)
Vue.component('about-content',AboutContent)
Vue.component('agency-content',AgencyContent)
Vue.component('portfolio-content',PortfolioContent)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
