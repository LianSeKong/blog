<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
import request from '@/utils/request'
export default {
  name: 'App',
  beforeCreate() {
    request.get('/banner').then(res => {
      console.log(res);
    })
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
