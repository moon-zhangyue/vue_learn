<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item">
        <img class="item-img" src="//imgs.qunarzz.com/p/p67/1512/a2/0ebfcd965b9391f7.jpg_256x160_04d5813d.jpg" alt="">
        <div class="item-info">
          <p class="item-title"></p>
          <p class="item-desc"></p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend"
}
</script>

<style lang="stylus" scoped>
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
  .item-icon
    flex 1
</style>
