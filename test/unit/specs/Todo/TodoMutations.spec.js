import store from '@/store/'
import todoModule from '@/store/modules/todo'
import * as mutation from '@/store/mutation-types'

describe('Alert component mutations:', () => {
  it('Should commit getting todo list', () => {
    store.commit(
      mutation.GET_TODO_LIST,
      [
        {
          'id': 1,
          'name': 'Mock todo',
          'isComplete': false
        },
        {
          'id': 2,
          'name': 'Mock todo completed',
          'isComplete': true
        }
      ]
    )

    expect(todoModule.state.todo).toHaveLength(2)
  })

  it('Should commit updating new todo name to post', () => {
    store.commit(mutation.UPDATE_NEW_TODO_NAME, 'A new todo name')

    expect(todoModule.state.newTodoName).toEqual('A new todo name')
  })

  it('Should commit clearing the new todo name', () => {
    store.commit(mutation.UPDATE_NEW_TODO_NAME, 'A new todo name')
    store.commit(mutation.CLEAR_NEW_TODO_NAME)

    expect(todoModule.state.newTodoName).toEqual('')
  })
})
