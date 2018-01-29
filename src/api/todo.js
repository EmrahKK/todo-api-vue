import Vue from 'vue'

var getApiEndpoint = () => {
  switch (process.env.NODE_ENV) {
    case 'production':
      return 'http://localhost:59044/api'
    case 'development':
      return 'http://localhost:59044/api'
  }
}

const endpoint = getApiEndpoint()

export default {
  getTodos () {
    return Vue.http.get(`${endpoint}/todo`)
  },

  addTodo (requestBody) {
    return Vue.http.post(`${endpoint}/todo`, requestBody)
  },

  removeTodo (id) {
    return Vue.http.delete(`${endpoint}/todo/${id}`)
  },

  toggleTodo (requestBody) {
    return Vue.http.put(`${endpoint}/todo/${requestBody.id}`, requestBody)
  }
}
