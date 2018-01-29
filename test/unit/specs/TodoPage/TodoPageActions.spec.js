import Vue from 'vue'
import Vuex from 'vuex'
import todoModule from '@/store/modules/todo'

Vue.use(Vuex)

jest.mock('@/api/todo')

describe('Todo page component actions:', () => {
  let store
  let actions
  let mutations
  let state

  beforeEach(() => {
    actions = todoModule.actions
    actions.showNotification = jest.fn()

    mutations = todoModule.mutations
    mutations.IS_LOADING_TODOS = jest.fn()

    state = todoModule.state

    store = new Vuex.Store({
      actions,
      mutations,
      state
    })
  })

  it('Should populate state after calling getTodos', () => {
    store.dispatch('getTodos').then(() => {
      expect(store.state.todo[0].name).toEqual('Mock todo')
      expect(store.state.todo[0].isComplete).toEqual(false)
      expect(store.state.todo[1].name).toEqual('Mock todo completed')
      expect(store.state.todo[1].isComplete).toEqual(true)
    })
  })

  it('Should not allow adding todo if empty name', () => {
    store.commit('UPDATE_NEW_TODO_NAME', '')

    store.dispatch('addTodo').then(() => {
      expect(store.state.todo[2]).toBeUndefined()
    })
  })

  it('Should allow adding todo', () => {
    store.commit('UPDATE_NEW_TODO_NAME', 'new todo')

    store.dispatch('addTodo').then(() => {
      expect(store.state.todo[2].name).toEqual('Mock todo added')
      expect(store.state.todo[2].isComplete).toEqual(false)
    })
  })

  it('Should allow removing todo', () => {
    store.dispatch('removeTodo', store.state.todo[2]).then(() => {
      expect(store.state.todo[2]).toBeUndefined()
    })
  })

  it('Should allow toggling todo', () => {
    const item = store.state.todo[1]
    const e = { target: { checked: '' } }

    store.dispatch('toggleTodo', {item, e}).then(() => {
      expect(store.state.todo[1].isComplete).toEqual(false)
    })
  })

  it('Should allow updating todo name', () => {
    const e = { target: { value: 'a typed todo name' } }

    store.dispatch('updateNewTodoName', e).then(() => {
      expect(store.state.newTodoName).toEqual('a typed todo name')
    })
  })
})
