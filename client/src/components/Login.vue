<template>
<section id="form">
  <div class="container">
    <div class="row">
      <div class="col-sm-4 col-sm-offset-1">
        <div class="login-form">
          <h2>Login as Customer</h2>
          <button class="btn btn-default get"  v-if="!isLoggedIn" @click="getStatusFB('user')" type="button"><i class="fa fa-facebook-square"></i> Login Facebook </button>
          <button class="btn btn-default get"  v-if="isLoggedIn" @click="logout()" type="button"><i class="fa fa-facebook-square"></i> Logout Facebook </button>
        </div>
      </div>
      <div class="col-sm-1">
        <h2 class="or">OR</h2>
      </div>
      <div class="col-sm-offset-2 col-sm-4">
        <div class="login-form">
          <h2>Login as Admin</h2>
          <button class="btn btn-default get" v-if="!isLoggedIn" @click="getStatusFB('admin')" type="button"><i class="fa fa-facebook-square"></i> Login Facebook </button>
          <button class="btn btn-default get"  v-if="isLoggedIn" @click="logout()" type="button"><i class="fa fa-facebook-square"></i> Logout Facebook </button>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import swal from 'sweetalert'
export default {
  data () {
    return {
      token: localStorage.getItem('token') || null
    }
  },
  computed: {
    isLoggedIn: {
      get () {
        return this.$store.state.isLoggedIn
      }
    }
  },
  methods: {
    getStatusFB (role) {
      this.loginFB(e => {
        // console.log('EEEEEE', e)
        this.getProfileFB(e, role)
      })
    },
    loginFB (callback) {
      window.FB.login(function (response) {
        if (response.status === 'connected') {
          // localStorage.setItem('fbtoken', this.fbtoken)
          callback(response)
        } else {
          console.log('Unknow connected facebook')
        }
      }, { scope: 'email,public_profile' })
    },
    getProfileFB (resp, role) {
      // console.log('get profile fbtoken : ', resp.authResponse.accessToken)
      if (resp.authResponse.accessToken !== null) {
        this.$axios.get(`/users/login-fb`, {
          headers: {
            fbtoken: resp.authResponse.accessToken,
            role: role
          }
        }).then(response => {
          // console.log('response', response)
          if (response.status === 200) {
            this.token = response.data.apptoken
            this.$store.state.isLoggedIn = true
            localStorage.setItem('token', response.data.apptoken)
            window.location.href = '/'
          } else {
            swal(`Oops, ${response.data.message}`, { icon: 'warning' })
          }
        }).catch(err => {
          console.log('error on fb login', err)
        })
      } else {
        console.log('unknow fb token')
      }
    },
    logout () {
      window.FB.getLoginStatus(function (response) {
        if (response.status === 'connected') {
          window.FB.logout(function (response) {
            localStorage.clear()
            // this.$router.push({ path: '/' })
            window.location.href = '/'
          })
        }
      })
    }
  }
}
</script>
