<template>
  <div class="slider">
    <Avatar :width="100" :height="100" description="Admin" class="avatar"></Avatar>
    <Contact class="contact" :list="list"></Contact>
    <Menu></Menu>
  </div>
</template>


<script>
import Avatar from '@/components/Avatar'
import Contact from '../components/Contact'
import Menu from '@/components/Menu'
export default {
  name: "SliderLayout",
  components: {
    Avatar,
    Contact,
    Menu
  },
  data() {
    return {
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
    }
  }
};
</script>

<style lang="scss" scoped>
  .slider {
    padding: 40px;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1)!important;
    transition: All .2s ease-in-out;
    .contact {
      margin-top: 20px;
    }
  }


</style>>


