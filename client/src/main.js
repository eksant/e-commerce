import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import store from './vuex/index'
import '@/assets/css/bootstrap.min.css'
import '@/assets/css/font-awesome.min.css'
import '@/assets/css/prettyPhoto.css'
import '@/assets/css/price-range.css'
import '@/assets/css/animate.css'
import '@/assets/css/main.css'
import '@/assets/css/responsive.css'

(function (d, s, id) {
  var js
  var fjs = d.getElementsByTagName(s)[0]
  if (d.getElementById(id)) return
  js = d.createElement(s); js.id = id
  js.src = 'https://connect.facebook.net/en_US/sdk.js'
  fjs.parentNode.insertBefore(js, fjs)
}(document, 'script', 'facebook-jssdk'))

var ApiFB = ''
var AxiosURL = ''
var LOCAL_DOMAINS = ['localhost', '127.0.0.1']
if (LOCAL_DOMAINS.includes(window.location.hostname)) {
  ApiFB = '213092439268283'
  AxiosURL = 'http://localhost:3002/api'
} else {
  ApiFB = '389643448127142'
  AxiosURL = 'http://seorangeksa.com:3002/api'
}
// console.log(AxiosURL)

window.fbAsyncInit = function () {
  window.FB.init({
    appId: ApiFB,
    cookie: true,
    xfbml: true,
    version: 'v2.12'
  })
  Vue.FB = window.FB
  // console.log(env)
}

Vue.config.productionTip = false
Vue.prototype.$axios = axios.create({
  baseURL: AxiosURL
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
