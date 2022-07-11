<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommandList" :key="item.id"> <!--一像素边框-->
        <img class="item-img" :src="item.imgUrl" alt="">
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  data() {
    return {
      recommandList: [{
        id: '0001',
        imgUrl: '//imgs.qunarzz.com/p/p67/1512/a2/0ebfcd965b9391f7.jpg_256x160_04d5813d.jpg',
        title: '大连圣亚海洋世界',
        desc: '浪漫大连首战,浪漫的海洋主题乐园'
      }, {
        id: '0002',
        imgUrl: '//imgs.qunarzz.com/p/p67/1512/a2/0ebfcd965b9391f7.jpg_256x160_04d5813d.jpg',
        title: '大连圣亚海洋世界',
        desc: '浪漫大连首战,浪漫的海洋主题乐园 '
      }, {
        id: '0003',
        imgUrl: '//imgs.qunarzz.com/p/p67/1512/a2/0ebfcd965b9391f7.jpg_256x160_04d5813d.jpg',
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

.item
  overflow hidden
  display flex
  height 1.9rem

  .item-img
    width 1.7rem
    weight 1.7rem
    padding .1rem

  .item-info
    flex 1
    padding .1rem
    min-width 0

    .item-title
      line-height .54rem
      font-size: .32rem
      ellipsis()

    .item-desc
      line-height .4rem
      color #ccc
      ellipsis()

    .item-button
      line-height .44rem
      margin-top .16rem
      background #ff9300
      padding 0 .2rem
      border-radius .06rem
      color #fff
</style>
