<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
import { getComments, getBlog } from '@/api/blog'
export default {
  name: 'App',
  beforeMount() {
    getComments(1).then(res => {
      console.log(res);
    })

    getBlog(1).then(res => {
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
