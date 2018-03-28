<template>
  <div id="app">
    <navbar/>
    <router-view/>
    <footpage/>
  </div>
</template>

<script>
import store from './vuex/index'
import navbar from '@/components/NavBar'
import footpage from '@/components/FootPage'

export default {
  name: 'App',
  store,
  components: {
    navbar, footpage
  },
  created () {
    this.$store.commit('setLoginStatus')
    this.$store.commit('getAllProduct')
  }
}
</script>

<style>
</style>
