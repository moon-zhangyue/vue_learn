<template>
    <div class="banner">
        <img class="banner-img"
             src="http://img1.qunarzz.com/sight/p0/2206/53/53e08d9798742e47a3.water.jpg_600x330_6b90b466.jpg" alt="">
        <div class="banner-info">
            <div class="banner-title">大连圣亚海洋世界（AAAA景区）</div>
            <div class="banner-number"><span class="iconfont">&#xe60e;</span>39</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "DetailBanner"
}
</script>

<style lang="stylus" scoped>
.banner
    overflow: hidden
    height: 0
    padding-bottom 55%

    .banner-img
        width 100%

    .banner-info
        disolay flex
        position: absolute
        left 0
        right 0
        bottom 0
        line-height .6rem
</style>
