import Vue from 'vue'

const endpoint = 'http://localhost:59044/api'

const onDefaultError = (e) => console.error(e)

export default {
  getTodos (onSuccess, onError = onDefaultError) {
    Vue.http.get(`${endpoint}/todo`).then(onSuccess).catch(onError)
  },

  getFilteredTodos (filter, onSuccess, onError = onDefaultError) {
    Vue.http.get(`${endpoint}/todo/${filter}`).then(onSuccess).catch(onError)
  },

  addTodo (payload, onSuccess, onError = onDefaultError) {
    Vue.http.post(`${endpoint}/todo`, payload).then(onSuccess).catch(onError)
  },

  removeTodo (id, onSuccess, onError = onDefaultError) {
    Vue.http.delete(`${endpoint}/todo/${id}`).then(onSuccess).catch(onError)
  },

  toggleTodo (payload, onSuccess, onError = onDefaultError) {
    Vue.http.put(`${endpoint}/todo/${payload.id}`, payload).then(onSuccess).catch(onError)
  }
}
