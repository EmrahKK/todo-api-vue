const onDefaultError = () => {}

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

export default {
  getTodos (onSuccess, onError = onDefaultError) {
    onSuccess(response)
  },

  addTodo (payload, onSuccess, onError = onDefaultError) {
    response.body.push({
      'id': 3,
      'name': 'Mock todo added',
      'isComplete': false
    })
    onSuccess()
  },

  removeTodo (id, onSuccess, onError = onDefaultError) {
    response.body.forEach((item, index) => {
      if (item.id === id) {
        delete response.body[index]
      }
    })
    onSuccess()
  },

  toggleTodo (payload, onSuccess, onError = onDefaultError) {
    response.body.forEach((item, index) => {
      if (item.id === payload.id) {
        response.body[index].isComplete = !response.body[index].isComplete
      }
    })
    onSuccess()
  }
}
