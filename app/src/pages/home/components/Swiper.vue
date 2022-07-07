<template>
  <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide>
      <img class='swiper-img'
           src="//img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_256x160_f977b5d4.jpg" alt="">
    </swiper-slide>
    <swiper-slide>
      <img class='swiper-img' src="//img1.qunarzz.com/sight/p0/1505/f5/f5f45e1a83537bcb.water.jpg_256x160_618d3a8e.jpg"
           alt="">
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOptions: {}
    }
  }
}
</script>

<style lang="stylus" scoped>
.swiper-img
  width: 100%
</style>
