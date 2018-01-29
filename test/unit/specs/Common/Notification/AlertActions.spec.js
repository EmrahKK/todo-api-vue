import Vue from 'vue'
import Vuex from 'vuex'
import alertModule from '@/store/modules/alert'
import * as mutation from '@/store/mutation-types'

Vue.use(Vuex)

describe('Alert component actions:', () => {
  let store
  let actions
  let mutations
  let state

  beforeEach(() => {
    actions = alertModule.actions

    mutations = alertModule.mutations

    state = alertModule.state

    store = new Vuex.Store({
      actions,
      mutations,
      state
    })
  })

  it('Should show an info notification', () => {
    store.dispatch(
      'showNotification',
      { mutationType: mutation.SHOW_INFO_NOTIFICATION, message: 'Info message' }
    ).then(() => {
      expect(store.state.status.message).toEqual('Info message')
      expect(store.state.status.cssClass).toEqual('alert-info')
      expect(store.state.status.showing).toEqual(true)
    })
  })

  it('Should show an error notification', () => {
    store.dispatch(
      'showNotification',
      { mutationType: mutation.SHOW_ERROR_NOTIFICATION, message: 'Error message' }
    ).then(() => {
      expect(store.state.status.message).toEqual('Error message')
      expect(store.state.status.cssClass).toEqual('alert-danger')
      expect(store.state.status.showing).toEqual(true)
    })
  })
})
