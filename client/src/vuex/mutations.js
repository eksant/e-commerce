import axios from 'axios'
const jwt = require('jsonwebtoken')

var url = ''
var LOCAL_DOMAINS = ['localhost', '127.0.0.1']
if (LOCAL_DOMAINS.includes(window.location.hostname)) {
  url = 'http://localhost:3002/api'
} else {
  url = 'http://seorangeksa.com:3002/api'
}

const mutations = {
  setLoginStatus () {
    var role = null
    if (localStorage.token !== undefined) {
      this.state.isLoggedIn = true
      jwt.verify(localStorage.token, 'ecommerce@2018', function (err, decoded) {
        if (!err) {
          // console.log(decoded.user)
          role = decoded.user.role
        } else {
          console.log('error jwt: ', err)
        }
      })
      this.state.role = role
    } else {
      this.state.isLoggedIn = false
      this.state.role = role
    }
  },
  getAllProduct () {
    // this.$axios.get('/products').then(resp => {
    axios.get(`${url}/products`).then(resp => {
      // console.log(resp.data.product)
      this.state.allProduct = resp.data.product
    }).catch(err => {
      console.error(err.message)
    })
  }
}

export default mutations
