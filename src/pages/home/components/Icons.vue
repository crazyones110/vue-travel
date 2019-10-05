<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page, index) of pages" :key="index">
                <div class="icon" v-for="img of page" :key="img.id">
                    <div class="icon-wrapper">
                        <img :src="img.imgUrl">
                        <p class="icon-desc">{{img.desc}}</p>
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
                    el: ".swiper-pagination",
                    autoPlay: false
                }
            }
        }
    },
    props: {
        list: Array
    },
    computed: {
        pages () {
            const pages = []
            this.list.forEach((item, index) => {
                const i = Math.floor(index / 8) // floor 是向下取整
                if (!pages[i]) { // i 更新了，pages[i]是 undefined，所以重新赋一个空数组
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
    transform: scale(0.8) translateY(70%)
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