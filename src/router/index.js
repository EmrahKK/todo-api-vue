import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '@/components/NotFound'
import Todo from '@/components/Todo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      'component': NotFound
    },
    {
      path: '/',
      name: 'Todo',
      component: Todo
    }
  ]
})
