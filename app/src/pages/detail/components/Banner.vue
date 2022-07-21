<template>
    <div>
        <div class="banner">
            <img class="banner-img"
                 src="http://img1.qunarzz.com/sight/p0/2206/53/53e08d9798742e47a3.water.jpg_600x330_6b90b466.jpg"
                 alt="">
            <div class="banner-info">
                <div class="banner-title">
                    北京环球度假区
                </div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xea83;</span>
                    39
                </div>
            </div>
        </div>
        <common-gallary></common-gallary>
    </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'

export default {
    name: "DetailBanner",
    components: {
        CommonGallary
    }
}
</script>

<style lang="stylus" scoped>
.banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom 55%

    .banner-img
        width 100%

    .banner-info
        display flex //弹性布局
        position: absolute
        left 0
        right 0
        bottom 0
        line-height .6rem
        color #fff
        background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))

        .banner-title
            flex 1
            font-size .32rem
            padding 0 .2rem

        .banner-number
            height .32rem
            padding 0 .4rem
            margin-top .14rem
            line-height .32rem
            border-radius .2rem
            background rgba(0, 0, 0, .8)
            font-size .24rem

            .banner-icon
                font-size .24rem
</style>
