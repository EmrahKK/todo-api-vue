import todoApi from './../../api/todo'
import * as mutation from '../mutation-types'

const state = {
  todo: [],
  newTodoName: ''
}

const getters = {
  todoList: state => state.todo,
  newTodoName: state => state.newTodoName
}

const mutations = {
  [mutation.GET_TODO_LIST] (state, payload) {
    state.todo = payload
  },

  [mutation.UPDATE_NEW_TODO_NAME] (state, newName) {
    state.newTodoName = newName
  },

  [mutation.CLEAR_NEW_TODO_NAME] (state) {
    state.newTodoName = ''
  }
}

const actions = {
  getTodos: ({commit, dispatch}) => {
    return new Promise((resolve, reject) => {
      const onSuccess = (response) => {
        commit(mutation.IS_LOADING_TODOS, false)
        commit(mutation.GET_TODO_LIST, response.body)

        dispatch('showNotification', {
          mutationType: mutation.SHOW_INFO_NOTIFICATION, message: 'Loaded TODO list'
        })

        resolve(response)
      }

      const onError = (e) => {
        dispatch('showNotification', {
          mutationType: mutation.SHOW_ERROR_NOTIFICATION, message: 'Something is wrong'
        })

        reject(e)
      }

      commit(mutation.IS_LOADING_TODOS, true)

      todoApi.getTodos()
        .then(onSuccess)
        .catch(onError)
    })
  },

  addTodo: ({dispatch, commit, state}) => {
    return new Promise((resolve, reject) => {
      if (state.newTodoName.length < 1) {
        alert('must put a todo name')
        reject(new Error('Must put a todo name'))
        return
      }

      const onSuccess = (response) => {
        commit(mutation.CLEAR_NEW_TODO_NAME)
        dispatch('getTodos')
        resolve(response)
      }

      const requestBody = {'name': state.newTodoName, 'isCompleted': false}

      commit(mutation.IS_LOADING_TODOS, true)

      todoApi.addTodo(requestBody)
        .then(onSuccess)
        .catch((e) => { reject(e) })
    })
  },

  removeTodo: ({ dispatch, commit }, item) => {
    return new Promise((resolve, reject) => {
      const onSuccess = (response) => {
        dispatch('getTodos')
        resolve(response)
      }

      commit(mutation.IS_LOADING_TODOS, true)

      todoApi.removeTodo(item.id)
        .then(onSuccess)
        .catch((e) => { reject(e) })
    })
  },

  toggleTodo: ({ dispatch, commit, state }, { item, e }) => {
    return new Promise((resolve, reject) => {
      const onSuccess = (response) => {
        dispatch('getTodos')
        resolve(response)
      }

      const requestbody = {
        'id': item.id, 'name': item.name, 'isComplete': e.target.checked
      }

      commit(mutation.IS_LOADING_TODOS, true)

      todoApi.toggleTodo(requestbody)
        .then(onSuccess)
        .catch((e) => { reject(e) })
    })
  },

  updateNewTodoName: ({ commit }, e) => {
    return new Promise((resolve, reject) => {
      if (e && e.target && e.target.value) {
        commit(mutation.UPDATE_NEW_TODO_NAME, e.target.value)
        resolve(e.target.value)
        return
      }

      reject(new Error('Element must be a event target'))
    })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
