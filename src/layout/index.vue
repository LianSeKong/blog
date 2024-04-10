<template>
  <div class="layout">
    <SliderLayout class="layout__lslider"></SliderLayout>
    <div class="layout__body">
        <router-view></router-view>
      <!-- <div class="empty-test">
        <Empty :imageSize="160" :image="image"> </Empty>
      </div>
      <div class="empty-test">
        <ImageLoader :placeholder="loader" :imageSrc="loader"></ImageLoader>
      </div>
      <Contact :list="list"></Contact> -->
    </div>
  </div>
</template>

<script>
// import Empty from "../components/Empty";
import SliderLayout from './components/SliderLayout/index.vue'
// import ImageLoader from "../components/ImageLoader";

// import Contact from '../components/Contact'
export default {
  name: "BlogLayout",
  components: {
    SliderLayout,
  },
};
</script>

<style lang="scss" scoped>
.layout {
  width: 100%;
  height: 100%;
  display: flex;
  background: #fff;

  &__lslider {
    width: 260px;
    height: 100%;
  }

  &__body {
    flex: 1;
  }
}
</style>
