<template>
    <div class="container">
        <div class="wrapper">
            <swiper :options="swiperOptions">
                <swiper-slide>
                    <img class='gallary-img'
                         src="//qimgs.qunarzz.com/piao_qsight_provider_piao_qsight_web/0100j1200046x94ebB936.jpg_350x240_807cfd94.jpg">
                </swiper-slide>
                <swiper-slide>
                    <img class='gallary-img'
                         src="//img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_350x240_8e61302a.jpg">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
    name: "CommonGallary",
    data() {
        return {
            swiperOptions: {
                pagination: '.swiper-pagination',
                paginationType: 'fraction'
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
.container >>> .swiper-container
    overflow inherit

.container
    display: flex
    flex-direction: column
    justify-content center
    z-index 99
    position: fixed
    left 0
    right 0
    top 0
    bottom 0
    background: #000

    .wrapper
        height 0
        width 100%
        padding-bottom 100%

        .gallary-img
            width 100%

        .swiper-pagination
            color: #fff
            bottom -1rem
</style>
