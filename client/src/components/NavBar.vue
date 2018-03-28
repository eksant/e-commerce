<template>
<header id="header">
  <div class="header_top">
    <div class="container">
      <div class="row">
        <div class="col-sm-6">
          <div class="contactinfo">
            <ul class="nav nav-pills">
              <li><a href="#"><i class="fa fa-phone"></i> +62 821 2255 9090</a></li>
              <li><a href="#"><i class="fa fa-envelope"></i> eksant@gmail.com</a></li>
            </ul>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="social-icons pull-right">
            <ul class="nav navbar-nav">
              <li><a href="https://www.linkedin.com/in/eko-santoso" target="_blank"><i class="fa fa-linkedin"></i></a></li>
              <li><a href="https://github.com/eksant" target="_blank"><i class="fa fa-github"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="header-middle">
    <div class="container">
      <div class="row">
        <div class="col-sm-4">
          <div class="logo pull-left">
            <a @click="getHomePage()" href=""><img src="@/assets/images/home/logo.png" alt="" /></a>
          </div>
        </div>
        <div class="col-sm-8">
          <div class="shop-menu pull-right">
            <ul v-if="!isLoggedIn" class="nav navbar-nav">
              <!-- <li><a href="#"><i class="fa fa-user"></i> Account</a></li> -->
              <!-- <li><a href="#"><i class="fa fa-star"></i> Wishlist</a></li> -->
              <!-- <li><a href="checkout.html"><i class="fa fa-crosshairs"></i> Checkout</a></li> -->
              <li><a @click.prevent="getLoginPage()" href="/login"><i class="fa fa-lock"></i> Login</a></li>
            </ul>
            <ul v-if="isLoggedIn" class="nav navbar-nav">
              <li v-if="userRole === 'admin'"><a @click="getProductPage()" href=""><i class="fa fa-plus"></i> Products</a></li>
              <li v-if="userRole === 'admin'"><a href=""><i class="fa fa-plus"></i> Items</a></li>
              <li v-if="userRole === 'user'"><a href=""><i class="fa fa-shopping-cart"></i> Cart</a></li>
              <li><a @click.prevent="logout()" href=""><i class="fa fa-lock"></i> Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="header-bottom">
    <div class="container">
      <div class="row">
        <div class="col-sm-9">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div class="mainmenu pull-left">
            <ul class="nav navbar-nav collapse navbar-collapse">
              <li><a @click="getHomePage()" href="" class="active">Home</a></li>
              <li><a href="/products">Products</a></li>
              <!-- <li class="dropdown">
                <a href="#">Shop <i class="fa fa-angle-down"></i></a>
                <ul role="menu" class="sub-menu">
                  <li><a href="shop.html">Products</a></li>
                  <li><a href="product-details.html">Product Details</a></li>
                  <li><a href="checkout.html">Checkout</a></li>
                  <li><a href="cart.html">Cart</a></li>
                  <li><a href="login.html">Login</a></li>
                </ul>
              </li> -->
              <!-- <li class="dropdown">
                <a href="#">Blog<i class="fa fa-angle-down"></i></a>
                <ul role="menu" class="sub-menu">
                  <li><a href="blog.html">Blog List</a></li>
                  <li><a href="blog-single.html">Blog Single</a></li>
                </ul>
              </li> -->
              <!-- <li><a href="404.html">404</a></li> -->
              <!-- <li><a href="contact-us.html">Contact</a></li> -->
            </ul>
          </div>
        </div>
        <!-- <div class="col-sm-3">
          <div class="search_box pull-right">
            <input type="text" placeholder="Search"/>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</header>
</template>

<script>
export default {
  computed: {
    isLoggedIn: {
      get () {
        return this.$store.state.isLoggedIn
      }
    },
    userRole: {
      get () {
        return this.$store.state.role
      }
    }
  },
  methods: {
    getHomePage () {
      this.$router.push({ path: '/' })
    },
    getLoginPage () {
      this.$router.push({ path: '/login' })
    },
    getProductPage () {
      this.$router.push({ path: '/products' })
    },
    logout () {
      localStorage.clear()
      this.$store.state.isLoggedIn = false
      this.$router.push({ path: '/' })
    }
  }
}
</script>
