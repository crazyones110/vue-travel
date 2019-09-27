<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page, index) of pages" :key="index">
                <div class="icon" v-for="img of page" :key="img.id">
                    <div class="icon-wrapper">
                        <img :src="img.src">
                        <p class="icon-desc">{{img.text}}</p>
                    </div>            
                </div>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>       
    </div>
</template>

<script>
export default {
    name: "homeIcons",
    data () {
        return {
            swiperOption: {
                pagination: {
                    el: ".swiper-pagination"
                }
            },
            imgList: [
                {
                    id: "0001",
                    src: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
                    text: "景点门票"
                },
                {
                    id: "0002",
                    src: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/94f7f5bf7b0f4d238dd68d718f102f40.png",
                    text: "中山陵"
                },
                {
                    id: "0003",
                    src: "http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png",
                    text: "文化古迹"
                },
                {
                    id: "0004",
                    src: "http://img1.qunarzz.com/piao/fusion/1803/97/02f5043b51b2102.png",
                    text: "牛首山"
                },
                {
                    id: "0005",
                    src: "http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
                    text: "一日游"
                },
                {
                    id: "0006",
                    src: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/b71c1387a921ccf9c6edc7e8def3da90.png",
                    text: "红山森林动物园"
                },
                {
                    id: "0007",
                    src: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/f6dda1876c5950d83cc159c8fd522943.png",
                    text: "总统府"
                },
                {
                    id: "0008",
                    src: "http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png",
                    text: "银杏湖乐园"
                },
                {
                    id: "0009",
                    src: "http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png",
                    text: "银杏湖乐园"
                }
            ]
        }
    },
    computed: {
        pages () {
            const pages = []
            this.imgList.forEach((item, index) => {
                const i = Math.floor(index / 8) // floor 是向下取整
                if (!pages[i]) {
                    pages[i] = []
                }
                pages[i].push(item)
            })
            return pages
        }
    }
}
</script>

<style lang="sass" scoped>
@import styles/mixins.sass
/deep/ .swiper-pagination
    transform: translateY(30%)
    transform: scale(0.8)
.icons
    box-sizing: border-box
    height: 0
    overflow: hidden
    padding-bottom: 50%
    .icon
        width: 25%
        float: left
        padding-bottom: 25%
        position: relative
        .icon-wrapper
            width: 100%
            height: 100%
            position: absolute
            top: 0
            left: 0
            display: flex
            flex-direction: column
            align-items: center
            justify-content: center
        img
            width: 55%
            .icon-desc
                +ellipsis()
</style>