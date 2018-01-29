import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import store from '@/store'

Vue.use(Vuex)
Vue.use(VueResource)

let routes = [
  {
    method: 'GET',
    url: '/mockApi/todo',
    response: 'GET todo list'
  },
  {
    method: 'POST',
    url: '/mockApi/todo',
    response: 'POST new todo'
  },
  {
    method: 'DELETE',
    url: '/mockApi/todo/321',
    response: 'DELETE todo'
  },
  {
    method: 'PUT',
    url: '/mockApi/todo/321',
    response: 'PUT todo'
  }
]

Vue.http.interceptors.unshift((request, next) => {
  let route = routes.find((item) => {
    return (request.method === item.method && request.url === item.url)
  })

  if (!route) {
    next(request.respondWith({ status: 404 }))
  } else {
    next(
      request.respondWith(
        route.response,
        {status: 200}
      )
    )
  }
})

describe('Todo page component actions:', () => {
  it('Should make GET request to Todo list endpoint', () => {
    store.dispatch('getTodos').then((r) => {
      expect(r.body).toEqual('GET todo list')
    })
  })

  it('Should not make POST request to Todo list endpoint when no new todo name', () => {
    store.dispatch('addTodo', {}).catch((e) => {
      expect(e.message).toEqual('Must put a todo name')
    })
  })

  it('Should make POST request to Todo list endpoint', () => {
    store.commit('UPDATE_NEW_TODO_NAME', 'some todo name')

    store.dispatch('addTodo', {}).then((r) => {
      expect(r.body).toEqual('POST new todo')
    })
  })

  it('Should make DELETE request to Todo list item endpoint', () => {
    store.dispatch('removeTodo', { id: 321 }).then((r) => {
      expect(r.body).toEqual('DELETE todo')
    })
  })

  it('Should make PUT request to Todo list item endpoint', () => {
    const item = {
      item: { id: 321, name: '', isComplete: false },
      e: { target: { checked: true } }
    }

    store.dispatch('toggleTodo', item).then((r) => {
      expect(r.body).toEqual('PUT todo')
    })
  })

  it('Should not update todo name if object passed is not an event target', () => {
    store.dispatch('updateNewTodoName', {}).catch((e) => {
      expect(e.message).toEqual('Element must be a event target')
    })
  })

  it('Should update todo name', () => {
    const e = { target: { value: 'Some value' } }
    store.dispatch('updateNewTodoName', e).then((r) => {
      expect(r).toEqual('Some value')
    })
  })
})
