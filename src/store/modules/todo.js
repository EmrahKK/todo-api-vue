import todoApi from './../../../api/todo'
import * as mutation from '../mutation-types'

const state = {
  todo: [],
  newTodoName: '',
  isErrored: false,
  errorMessage: ''
}

const getters = {
  todoList: state => state.todo,
  newTodoName: state => state.newTodoName,
  errorMessage: state => state.errorMessage
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
  },

  [mutation.ERROR_HAPPENED] (state, errorMessage) {
    state.errorMessage = errorMessage
  }
}

const actions = {
  getTodos: ({commit}) => {
    const onSuccess = (response) => {
      commit(mutation.IS_LOADING_TODOS, false)
      commit(mutation.GET_TODO_LIST, response.body)
    }

    const onError = (e) => {
      commit(mutation.ERROR_HAPPENED, 'There was a problem.')
      console.log(e)
    }

    commit(mutation.IS_LOADING_TODOS, true)

    todoApi.getTodos(onSuccess, onError)
  },

  addTodo: ({dispatch, commit, state}) => {
    if (state.newTodoName.length < 1) {
      alert('must put a todo name')
      return
    }

    const onSuccess = () => {
      commit(mutation.CLEAR_NEW_TODO_NAME)
      dispatch('getTodos')
    }

    commit(mutation.IS_LOADING_TODOS, true)
    todoApi.addTodo({'name': state.newTodoName, 'isCompleted': false}, onSuccess)
  },

  removeTodo: ({ dispatch, commit }, item) => {
    commit(mutation.IS_LOADING_TODOS, true)
    todoApi.removeTodo(item.id, () => dispatch('getTodos'))
  },

  toggleTodo: ({ dispatch, commit, state }, { item, e }) => {
    commit(mutation.IS_LOADING_TODOS, true)
    todoApi.toggleTodo(
        {'id': item.id, 'name': item.name, 'isComplete': e.target.checked},
        () => dispatch('getTodos')
    )
  },

  updateNewTodoName: ({ commit }, e) => {
    commit(mutation.UPDATE_NEW_TODO_NAME, e.target.value)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
