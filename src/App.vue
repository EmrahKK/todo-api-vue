<template>
  <div id="app">
    <Navigation />
    <IsLoading />
    <Notification />
    <router-view/>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import IsLoading from './components/IsLoading'
import Notification from './components/Notification'
import Navigation from './components/Navigation'

export default {
  name: 'app',
  components: {
    IsLoading,
    Notification,
    Navigation
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
