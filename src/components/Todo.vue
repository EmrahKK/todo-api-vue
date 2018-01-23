<template>
  <div>
    <div class="main">
      <h1>Todo list</h1>
      <div class="content">
        <TodoForm />
        <TodoList />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import TodoList from './Todo/TodoList'
import TodoForm from './Todo/TodoForm'

export default {
  name: 'Todo',

  methods: mapActions([
    'getTodos'
  ]),

  components: {
    TodoList,
    TodoForm
  },

  beforeMount () {
    this.getTodos()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.main {
  padding: 8pt;
  max-width: 320pt;
  margin: auto;

  .content {
    transition: 1s;
    position: relative;
    text-align: left;
  }
}
</style>
