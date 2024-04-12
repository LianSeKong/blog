<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
import {getBlogs} from '@/api/blog'
export default {
  name: 'App',
  beforeMount() {
    getBlogs().then(res => {
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
