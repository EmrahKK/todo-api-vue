import * as mutation from '../mutation-types'

const state = {
  status: {
    cssClass: '',
    message: '',
    showing: false
  }
}

const getters = {
  status: state => state.status
}

const mutations = {
  [mutation.SHOW_INFO_NOTIFICATION] (state, message) {
    state.status.cssClass = 'alert-info'
    state.status.message = message
    state.status.showing = true
  },

  [mutation.SHOW_ERROR_NOTIFICATION] (state, message) {
    state.status.cssClass = 'alert-danger'
    state.status.message = message
    state.status.showing = true
  },

  [mutation.HIDE_NOTIFICATION] (state) {
    state.status.showing = false
  }
}

const actions = {
  showNotification: ({ commit, state }, { mutationType, message }) => {
    return new Promise((resolve, reject) => {
      if (mutationType === undefined) {
        reject(new Error('Missing mutationType'))
      }

      if (message === undefined) {
        reject(new Error('Missing message'))
      }

      if (message.length < 1) {
        reject(new Error('Empty message'))
      }

      if (
        mutationType === mutation.SHOW_INFO_NOTIFICATION ||
        mutationType === mutation.SHOW_ERROR_NOTIFICATION
      ) {
        commit(mutationType, message)
        resolve(() => {
          if (state.status.showing === true) {
            commit(mutation.HIDE_NOTIFICATION)
          }
        })
      }

      reject(new Error('Wrong mutationType'))
    })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
