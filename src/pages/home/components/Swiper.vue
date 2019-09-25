<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide>
                <img class="swiper-img" src="@/assets/imgs/swiper-1.jpg">
            </swiper-slide>
            <swiper-slide>
                <img class="swiper-img" src="@/assets/imgs/swiper-2.jpg">
            </swiper-slide>
            <swiper-slide>
                <img class="swiper-img" src="@/assets/imgs/swiper-3.jpg">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name: "HomeSwiper",
    data () {
        return {
            swiperOption: {
                loop: true,
                pagination: {
                    el: ".swiper-pagination"
                }
            },
            imgSrc: [
                ""
            ]
        }
    }
}
</script>
<style lang="sass">
.swiper-pagination-bullet-active
    background-color: #fff
</style>>
    
</style>
<style lang="sass" scoped>
// .wrapper >>> .swiper-pagination-bullet-active
//     background-color: red
// 这里穿透为啥不好使？
.wrapper
    width: 100%
    height: 0
    overflow: hidden
    padding-bottom: 66.7%
    // 还可以写 height: 31.25vw
    background-color: #eee
.swiper-img
    width: 100%
</style>