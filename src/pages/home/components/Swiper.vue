<template>
    <div class="wrapper" id="home-swiper">
        <swiper :options="swiperOption">
            <swiper-slide v-for="item of imgSrc" :key="item.id">
                <img class="swiper-img" :src="item.url">
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
            imgSrc: [
                {
                    id: "0001",
                    url: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20199/4e3f5a83099e6571ce4cad8609236121.jpg_750x200_48199ef2.jpg"
                },
                {
                    id: "0002",
                    url: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20199/bc504af704ef02fbc0455fdbab8635ee.jpg_750x200_fa9cad2a.jpg"
                },
                {
                    id: "0003",
                    url: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20199/bc504af704ef02fbc0455fdbab8635ee.jpg_750x200_fa9cad2a.jpg"
                }
            ]
        }
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
    padding-bottom: 26.7%
    // 还可以写 height: 31.25vw
    background-color: #eee
.swiper-img
    width: 100%
</style>