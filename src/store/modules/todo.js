import todoApi from './../../../api/todo'
import * as mutation from '../mutation-types'

const state = {
  todo: [],
  newTodoName: '',
  isLoading: true
}

const getters = {
  todoList: state => state.todo,
  newTodoName: state => state.newTodoName,
  isLoading: state => state.isLoading
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

  [mutation.IS_LOADING_TODOS] (state, isLoading) {
    state.isLoading = isLoading
  }
}

const actions = {
  getTodos: ({commit}) => {
    commit(mutation.IS_LOADING_TODOS, true)

    todoApi.getTodos(
      (response) => {
        commit(mutation.IS_LOADING_TODOS, false)
        commit(mutation.GET_TODO_LIST, response.body)
      }
    )
  },

  addTodo: ({dispatch, commit, state}) => {
    if (state.newTodoName.length < 1) {
      alert('must put a todo name')
      return
    }

    todoApi.addTodo(
      {'name': state.newTodoName, 'isCompleted': false},
      () => {
        commit(mutation.CLEAR_NEW_TODO_NAME)
        dispatch('getTodos')
      }
    )
  },

  removeTodo: ({dispatch, commit}, e) => {
    todoApi.removeTodo(
      e.target.dataset.todoId, () => dispatch('getTodos')
    )
  },

  toggleTodo: ({dispatch, commit, state}, e) => {
    let todoItem = state.todo[e.target.dataset.todoIndex]

    todoApi.toggleTodo(
        {'id': todoItem.id, 'name': todoItem.name, 'isComplete': e.target.checked},
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
