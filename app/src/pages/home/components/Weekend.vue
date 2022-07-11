<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommandList" :key="item.id"> <!--一像素边框-->
        <div class="item-img-wrapper"><img class="item-img" :src="item.imgUrl" alt=""></div>

        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeWeekend",
  data() {
    return {
      recommandList: [{
        id: '0001',
        imgUrl: 'https://imgs.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
        title: '大连圣亚海洋世界',
        desc: '浪漫大连首战,浪漫的海洋主题乐园'
      }, {
        id: '0002',
        imgUrl: 'https://imgs.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
        title: '大连圣亚海洋世界',
        desc: '浪漫大连首战,浪漫的海洋主题乐园 '
      }, {
        id: '0003',
        imgUrl: 'https://imgs.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
        title: '大连圣亚海洋世界',
        desc: '浪漫大连首战,浪漫的海洋主题乐园'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.title
  margin-top .2rem
  line-height: .8rem
  background #eee
  text-indent .2rem

.item-img-wrapper
  overflow: hidden
  height 0
  padding-bottom 33.9%

  .item-img
    width 100%

.item-info
  padding .1rem

  .item-title
    line-height .54rem
    font-size: .32rem
    ellipsis()

  .item-desc
    line-height .4rem
    color #ccc
    ellipsis()
</style>
