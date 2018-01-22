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

var hideNotificationDelayed

const actions = {
  showNotification: ({ commit, state }, { mutationType, message }) => {
    clearTimeout(hideNotificationDelayed)
    commit(mutationType, message)

    hideNotificationDelayed = setTimeout(() => {
      if (state.status.showing === true) {
        commit(mutation.HIDE_NOTIFICATION)
      }
    }, 4000)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
