<template>
  <div class="statusElement alert"
    v-bind:class="[status.cssClass, {showing: status.showing === true}]">
    {{ status.message }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters([
    'status'
  ])
}
</script>

<style scoped lang="less">
.statusElement {
  position: fixed;
  top: -150px;
  left: 0;
  width: 100%;
  opacity: .9;
  transition: 1s ease-in-out;
  padding: 2pt 0;
  font-size: 0.8em;

  &.showing {
    top: 0;
    opacity: .9;
  }
}
</style>
