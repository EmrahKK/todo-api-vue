<template>
  <div class="hello" v-bind:class="{loading: isLoading}">
    <div class="alert alert-danger" v-if="errorMessage">{{ errorMessage }}</div>
    <h1>Todo list</h1>
    <div id="todoList">
      <div class="loadingElement" v-bind:class="{loading: isLoading}">Loading...</div>
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
      <ul>
        <li v-for="item in todoList">
          <label>
            <input
              @change="(e) => toggleTodo({ item, e })"
              type="checkbox" :checked="item.isComplete" />
            <span v-bind:class="{tacher: item.isComplete}">
              {{ item.name }}
            </span>
          </label>
          <button
            class="btn btn-xs btn-danger"
            @click="removeTodo(item)">X</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  computed: mapGetters([
    'todoList',
    'newTodoName',
    'isLoading',
    'isErrored',
    'errorMessage'
  ]),
  name: 'Todo',
  methods: mapActions([
    'getTodos',
    'addTodo',
    'removeTodo',
    'updateNewTodoName',
    'toggleTodo'
  ]),
  beforeMount () {
    this.getTodos()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.hello {
  padding: 8pt;
  #todoList {
    transition: 1s;
    position: relative;
    text-align: left;
    max-width: 320pt;
    margin: auto;

    .loadingElement {
      font-size: 0.8em;
      background: #eaebf6;
      position: absolute;
      width: 95pt;
      text-align: center;
      left: 120pt;
      top: 20pt;
      padding: 8pt 16pt;
      font-weight: bold;
      color: #7483a8;
      border-radius: 4pt;
      opacity: 0;
      transition: 1s;
    }

    .flexible {
      display: flex;

      .form-control {
        margin-right: 4pt;
      }
    }

    .form-group {
      input, button {
          transition: 1s;
      }

    }
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      li {
        margin: 0;
        padding: 0;
        font-size: 12pt;
        display: flex;
        justify-content: space-between;
        padding-bottom: 0pt;
        margin-top: 4pt;
        border-bottom: 1px solid #f3f3f3;
        line-height: 21pt;

        &:first-child {
          border-top: 1px solid #f3f3f3;
          padding-top: 4pt;
        }

        label {
          cursor: pointer;

          input[type="checkbox"] {
            display: none;
          }

          span {
            transition: .3s;

            &.tacher {
              text-decoration: line-through;
              opacity: .6;
            }
          }

        }

        button {
          width: 20pt;
          height: 20pt;
        }
      }
    }
  }

  &.loading #todoList {
      opacity: .75;
      .loadingElement {
        opacity: 1;
      }
  }

  &.loading {
    position: relative;
  }
}
</style>
