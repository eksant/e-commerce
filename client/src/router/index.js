import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import FormProduct from '@/components/FormProduct'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/products',
      name: 'FormProduct',
      component: FormProduct
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
