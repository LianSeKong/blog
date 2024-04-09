<template>
  <div class="blog">
    <SliderLayout class="blog-slider"></SliderLayout>
    <div class="blog-body">
      <div class="empty-test">
        <Empty :imageSize="160" :image="image"> </Empty>
      </div>
      <div class="empty-test">
        <ImageLoader :placeholder="loader" :imageSrc="loader"></ImageLoader>
      </div>
      <Contact :list="list"></Contact>
    </div>
  </div>
</template>

<script>
import Empty from "../components/Empty";
import SliderLayout from "./SliderLayout.vue";
import ImageLoader from "../components/ImageLoader";

import Contact from '../components/Contact'
export default {
  name: "BlogLayout",
  components: {
    SliderLayout,
    Empty,
    ImageLoader,

    Contact
  },
  data() {
    return {
      loader: "https://w.wallhaven.cc/full/x6/wallhaven-x621xo.png",
      list: [
        {
            desc: '599820462@qq.com',
            iconName: 'github-fill',
            iconSize: 40,
            imgSrc: 'https://w.wallhaven.cc/full/we/wallhaven-werdv6.png'
        },
        {
            desc: 'liansekong@gmail.com',
            iconName: 'gmail',
            iconSize: 40,
            imgSrc: 'https://w.wallhaven.cc/full/rr/wallhaven-rrz76w.jpg'
        }
      ],
      image:
        "https://img.icons8.com/external-basicons-color-edtgraphics/200/external-Paper-sheets-office-stationery-basicons-color-edtgraphics-2.png",
    };
  },
};
</script>

<style scoped>
.blog {
  width: 100%;
  height: 100%;
  display: flex;
  background: #fff;
}
.blog-slider {
  width: 300px;
  height: 100%;
}
.blog-body {
  flex: 1;
}

.empty-test {
  width: 400px;
  border: 1px solid #000;
  height: 300px;
}

.icon {
  width: 20px;
  height: 20px;
}
</style>
