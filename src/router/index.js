import Vue from 'vue'
import Router from 'vue-router'
import NotFoundPage from '@/components/NotFound/NotFoundPage'
import TodoPage from '@/components/Todo/TodoPage'
import AboutPage from '@/components/About/AboutPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      'component': NotFoundPage
    },
    {
      path: '/',
      name: 'TodoPage',
      component: TodoPage
    },
    {
      path: '/about',
      name: 'AboutPage',
      component: AboutPage
    }
  ]
})
