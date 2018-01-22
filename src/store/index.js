import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import BootstrapVue from 'bootstrap-vue'
import todo from './modules/todo'
import isLoading from './modules/isLoading'
import notification from './modules/notification'

Vue.use(Vuex)
Vue.use(VueResource)
Vue.use(BootstrapVue)

export default new Vuex.Store({
  modules: {
    todo,
    isLoading,
    notification
  },
  strict: true
})
