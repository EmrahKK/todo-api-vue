<template>
  <ul>
    <li v-for="item in todoList">
      <label>
        <input
          @change="(e) => !isLoading && toggleTodo({ item, e })"
          type="checkbox" :checked="item.isComplete" />
        <span v-bind:class="{tacher: item.isComplete}">
          {{ item.name }}
        </span>
      </label>
      <button
        class="btn btn-xs btn-danger"
        :disabled="isLoading"
        @click="removeTodo(item)">X</button>
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters([
    'isLoading',
    'todoList'
  ]),

  methods: mapActions([
    'removeTodo',
    'toggleTodo'
  ])
}
</script>

<style scoped lang="less">
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
      transition: .3s;
    }
  }
}
</style>
