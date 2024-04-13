<template>
  <div class="slider">
    <Avatar :width="100" :height="100" description="LianSeKong" class="avatar"></Avatar>
    <Menu class="menu"></Menu>
    <Contact class="contact" :list="list"></Contact>
  </div>
</template>

<script>
import Avatar from '@/components/Avatar'
import qqSrc from '@/assets/qq.jpg'
import wxSrc from '@/assets/wx.png'
import Contact from '../Contact'
import Menu from '../Menu'
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
          iconSize: 30,
          imgSrc: wxSrc
        },
        {
          desc: 'liansekong@gmail.com',
          iconName: 'gmail',
          iconSize: 30,
          imgSrc: wxSrc
        },
        {
          desc: '858247021',
          iconName: 'qq',
          iconSize: 30,
          imgSrc: qqSrc
        },
        {
          desc: 'zzdqlpf',
          iconName: 'wx',
          iconSize: 30,
          imgSrc: wxSrc
        }
      ],
    }
  }
};
</script>

<style lang="scss" scoped>
.slider {
  position: relative;
  padding: 40px 20px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1) !important;
  transition: All .2s ease-in-out;

  .menu {
    margin-top: 40px;
  }

  .contact {
    margin-top: 40px;
  }
}
</style>>
