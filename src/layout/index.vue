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
    <!-- <div class="layout__rslider">
      <Menu @select="handleSelect"  :list="list"></Menu>
    </div> -->
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
  data() {
    return {
      list:  [
                {
                    name: '科技',
                    isSelected: true,
                    children: [
                        {
                            name: '科技1-1',
                            isSelected: false,
                            children: null
                        },
                        {
                            name: '科技1-2',
                            isSelected: false,
                            children: null
                        },
                        {
                            name: '科技1-3',
                            isSelected: false,
                            children: null
                        }
                    ]
                },
                {
                    name: '文学2',
                    isSelected: false,
                    children: [
                        {
                            name: '文学2-1',
                            isSelected: false,
                            children: null
                        },
                        {
                            name: '文学2-2',
                            isSelected: false,
                            children: null
                        },
                        {
                            name: '文学2-3',
                            isSelected: false,
                            children: [
                                {
                                    name: '文学2-3-1',
                                    children: null
                                }
                            ]
                        }
                    ]
                },
                {
                    name: '军事',
                    children: null
                }
            ]
    }
  },
  methods: {
    handleSelect(item) {
      // const target = this.list.find(ele => ele === item)
      console.log("target: ", item);
      item.isSelected = true
    }
  }
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

  // &__rslider {
  //   padding: 20px;
  //   width: 260px;
  //   height: 100%;
  // }

  &__body {
    flex: 1;
  }
}
</style>
