import Vue from 'vue'
import Vuex from 'vuex'
import { mount } from 'vue-test-utils'
import IsLoading from '@/components/Common/Notification/IsLoading'
import isLoadingModule from '@/store/modules/isLoading'

Vue.use(Vuex)

describe('Alert component rendering:', () => {
  let getters
  let store

  beforeEach(() => {
    getters = {
      isLoading: isLoadingModule.getters.isLoading
    }
  })

  it('Should render a hidden loading notification', () => {
    store = new Vuex.Store({
      getters,
      state: {
        isLoading: false
      }
    })

    const wrapper = mount(IsLoading, { store })
    const template = wrapper.html()

    expect(template).toMatchSnapshot()
  })

  it('Should render a visible loading notification', () => {
    store = new Vuex.Store({
      getters,
      state: {
        isLoading: true
      }
    })

    const wrapper = mount(IsLoading, { store })
    const template = wrapper.html()

    expect(template).toMatchSnapshot()
  })
})
