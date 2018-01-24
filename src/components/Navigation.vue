<template>
  <nav>
    <router-link to="/" exact>Todo</router-link>
    <router-link to="/about">About</router-link>
  </nav>
</template>

<style scoped lang="less">
nav {
  border-bottom: 1pt solid #f3f3f3;

  a {
    display: inline-block;
    padding: 4pt 16pt;
    margin: 0 4pt;
    text-decoration: none;
    color: black;

    &.router-link-active {
      background: #f3f3f3;
    }
  }
}
</style>
