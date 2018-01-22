<template>
  <form v-on:submit.prevent>
    <div class="form-group flexible">
      <input
        class="form-control"
        :value="newTodoName"
        @input="(e) => updateNewTodoName(e)"
        :disabled="isLoading" />
      <button
        class="btn btn-primary"
        :disabled="isLoading"
        @click="addTodo()">Set new todo</button>
    </div>
  </form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters([
    'isLoading',
    'newTodoName'
  ]),

  methods: mapActions([
    'addTodo',
    'updateNewTodoName'
  ])
}
</script>

<style scoped lang="less">
.form-group {
  &.flexible {
    display: flex;

    .form-control {
      margin-right: 4pt;
    }
  }

  input, button {
      transition: 1s;
  }
}
</style>
