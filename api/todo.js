import Vue from 'vue'

const endpoint = 'http://localhost:59044/api'

export default {
  getTodos (onSuccess) {
    Vue.http.get(`${endpoint}/todo`).then(onSuccess)
  },

  addTodo (payload, onSuccess) {
    Vue.http.post(`${endpoint}/todo`, payload).then(onSuccess)
  },

  removeTodo (id, onSuccess) {
    Vue.http.delete(`${endpoint}/todo/${id}`).then(onSuccess)
  },

  toggleTodo (payload, onSuccess) {
    Vue.http.put(`${endpoint}/todo/${payload.id}`, payload).then(onSuccess)
  }
}
