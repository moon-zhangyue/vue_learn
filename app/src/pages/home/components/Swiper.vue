<template>
  <div class="wrapper">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class='swiper-img'
             :src="item.imgUrl">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOptions: {
        pagination: ".swiper-pagination",
        loop: true //支持循环
      },
      swiperList: [{
        id: '0001',
        imgUrl: '//img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_256x160_f977b5d4.jpg'
      }, {
        id: '0001',
        imgUrl: '//img1.qunarzz.com/sight/p0/1505/f5/f5f45e1a83537bcb.water.jpg_256x160_618d3a8e.jpg'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background #fff !important

.wrapper
  width: 100%
  height: 0
  padding-bottom: 31.25%
  background #666666

  .swiper-img
    width: 100%
</style>
