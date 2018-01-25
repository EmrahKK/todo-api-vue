<template>
  <div id="app">
    <MainMenu />
    <IsLoading />
    <Alert />
    <router-view/>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import IsLoading from '@/components/Common/Notification/IsLoading'
import Alert from '@/components/Common/Notification/Alert'
import MainMenu from '@/components/Common/Navigation/MainMenu'

export default {
  name: 'app',
  components: {
    IsLoading,
    Alert,
    MainMenu
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
