<template>
  <div class="loadingElement" v-bind:class="{loading: isLoading}">
    Loading...
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters([
    'isLoading'
  ])
}
</script>

<style scoped lang="less">
.loadingElement {
  position: fixed;
  bottom: -100%;
  left: 0;
  z-index: 90;
  width: 100%;
  font-size: 0.8em;
  background: #eaebf6;
  text-align: center;
  padding: 8pt 16pt;
  font-weight: bold;
  color: #7483a8;
  border-radius: 4pt;
  opacity: 0;
  transition: 1s;

  &.loading {
    display: block;
    bottom: 0;
    opacity: 1;
  }
}
</style>
