<template>
    <div class="wrapper" id="home-swiper">
        <swiper :options="swiperOption" v-if="list.length">
            <swiper-slide v-for="item of list" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl">
                <!-- 123 -->
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
        }
    },
    props: {
        list: Array
    }
}
</script>
    
<style lang="sass" scoped>
.wrapper
    /deep/ .swiper-pagination-bullet-active
        background-color: #fff 
// 这里穿透为啥不好使？
.wrapper
    width: 100%
    height: 0
    overflow: hidden
    padding-bottom: 31.25%
    // 还可以写 height: 31.25vw
    background-color: #eee
.swiper-img
    width: 100%
</style>