let response = {
  'body': [
    {
      'id': 1,
      'name': 'Mock todo',
      'isComplete': false
    },
    {
      'id': 2,
      'name': 'Mock todo completed',
      'isComplete': true
    }
  ]
}

let p = new Promise((resolve, reject) => {
  resolve(response)
})

export default {
  getTodos () {
    return p
  },

  addTodo (payload) {
    response.body.push({
      'id': 3,
      'name': 'Mock todo added',
      'isComplete': false
    })

    return p
  },

  removeTodo (id) {
    response.body.forEach((item, index) => {
      if (item.id === id) {
        delete response.body[index]
      }
    })

    return p
  },

  toggleTodo (requestBody) {
    response.body.forEach((item, index) => {
      if (item.id === requestBody.id) {
        response.body[index].isComplete = !response.body[index].isComplete
      }
    })

    return p
  }
}
