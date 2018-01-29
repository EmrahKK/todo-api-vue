import Vue from 'vue'
import Vuex from 'vuex'
import { mount } from 'vue-test-utils'
import Alert from '@/components/Common/Notification/Alert'
import alertModule from '@/store/modules/alert'

Vue.use(Vuex)

describe('Alert component rendering:', () => {
  let getters
  let store

  beforeEach(() => {
    getters = {
      status: alertModule.getters.status
    }
  })

  it('Should render a hidden alert', () => {
    store = new Vuex.Store({
      getters,
      state: {
        status: {
          cssClass: 'alert-info',
          message: 'Some alert message',
          showing: false
        }
      }
    })

    const wrapper = mount(Alert, { store })
    const template = wrapper.html()

    expect(template).toMatchSnapshot()
  })

  it('Should render a visible alert', () => {
    store = new Vuex.Store({
      getters,
      state: {
        status: {
          cssClass: 'alert-info',
          message: 'Some alert message',
          showing: true
        }
      }
    })

    const wrapper = mount(Alert, { store })
    const template = wrapper.html()

    expect(template).toMatchSnapshot()
  })
})
