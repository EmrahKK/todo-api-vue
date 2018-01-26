import Vue from 'vue'
import Vuex from 'vuex'
import { mount } from 'vue-test-utils'
import TodoPage from '@/components/Todo/TodoPage'

Vue.use(Vuex)

describe('Todo page component rendering:', () => {
  let getters
  let store
  let actions

  beforeEach(() => {
    getters = {
      todoList: state => state.todo,
      newTodoName: state => state.newTodoName,
      isLoading: state => state.isLoading
    }

    actions = {
      getTodos: jest.fn()
    }
  })

  it('Renders todo page with no results', () => {
    store = new Vuex.Store({
      getters,
      actions
    })

    const wrapper = mount(TodoPage, { store })
    const template = wrapper.html()

    expect(template).toMatchSnapshot()
  })

  it('Should have some list items', () => {
    store = new Vuex.Store({
      getters,
      actions,
      state: {
        'todo': [{
          'id': 5,
          'name': 'Hacer la colada oscura',
          'isComplete': false
        }, {
          'id': 6,
          'name': 'Comprar matadinosaurios',
          'isComplete': true
        }, {
          'id': 19,
          'name': 'Barrer el suelanis',
          'isComplete': false
        }, {
          'id': 32,
          'name': 'foobaris',
          'isComplete': true
        }, {
          'id': 34,
          'name': 'Urujai',
          'isComplete': false
        }]
      }
    })

    const wrapper = mount(TodoPage, { store })
    const template = wrapper.html()

    expect(template).toMatchSnapshot()
  })

  it('Should match input value with state value', () => {
    store = new Vuex.Store({
      getters,
      actions,
      state: {
        'newTodoName': 'some todo name'
      }
    })

    const wrapper = mount(TodoPage, { store })
    const input = wrapper.find('input')

    expect(input.element.value).toEqual('some todo name')
  })

  it('Should disable input and buttons when is on loading state', () => {
    store = new Vuex.Store({
      getters,
      actions,
      state: {
        'todo': [{
          'id': 5,
          'name': 'Hacer la colada oscura',
          'isComplete': false
        }],
        'isLoading': true
      }
    })

    const wrapper = mount(TodoPage, { store })
    const template = wrapper.html()

    expect(template).toMatchSnapshot()
  })
})
