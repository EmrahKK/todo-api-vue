import * as mutation from '../mutation-types'

const state = {
  isLoading: true
}

const getters = {
  isLoading: state => state.isLoading
}

const mutations = {
  [mutation.IS_LOADING_TODOS] (state, isLoading) {
    state.isLoading = isLoading
  }
}

export default {
  state,
  getters,
  mutations
}
