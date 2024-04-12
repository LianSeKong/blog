<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  beforeCreate() {

  }
}
</script>

<style>
  #app {
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;
  }
</style>
