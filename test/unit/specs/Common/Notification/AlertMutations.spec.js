import store from '@/store/'
import alertModule from '@/store/modules/alert'
import * as mutation from '@/store/mutation-types'

describe('Alert component mutations:', () => {
  it('Should commit an info notification', () => {
    store.commit(mutation.SHOW_INFO_NOTIFICATION, 'An info message')

    expect(alertModule.state.status.cssClass).toEqual('alert-info')
    expect(alertModule.state.status.message).toEqual('An info message')
    expect(alertModule.state.status.showing).toEqual(true)
  })

  it('Should commit an error notification', () => {
    store.commit(mutation.SHOW_ERROR_NOTIFICATION, 'An error message')

    expect(alertModule.state.status.cssClass).toEqual('alert-danger')
    expect(alertModule.state.status.message).toEqual('An error message')
    expect(alertModule.state.status.showing).toEqual(true)
  })

  it('Should commit hiding a notification', () => {
    store.commit(mutation.SHOW_INFO_NOTIFICATION, 'Some message')
    store.commit(mutation.HIDE_NOTIFICATION)

    expect(alertModule.state.status.showing).toEqual(false)
  })
})
