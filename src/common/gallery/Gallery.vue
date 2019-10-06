<template>
    <div class="container" @click="handleGalleryClick">
        <div class="wrapper">
            <swiper :options="swiperOptions">
                <swiper-slide v-for="(item, index) in imgs" :key="index">
                    <img class="gallery-img" :src="item">
                </swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
    name: "CommonGallery",
    data () {
        return {
            swiperOptions: {
                pagination: {
                    el: ".swiper-pagination",
                    type: "fraction"
                },
                observeParents: true, // 监听父元素发生变化的话，DOM 自动刷新一次
                observer: true // 监听自己发生变化的话，DOM 自动刷新一次
            }
        }
    },
    props: {
        imgs: {
            type: Array,
            default () {
                return []
            }
        }
    },
    methods: {
        handleGalleryClick () {
            this.$emit("close")
        }
    }
}
</script>

<style lang="sass" scoped>
.container
    /deep/ .swiper-container
        overflow: inherit
    display: flex
    flex-direction: column
    justify-content: center
    z-index: 99
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    background-color: #000
    .wrapper
        width: 100%
        height: 0
        padding-bottom: 56.22%
        .gallery-img
            width: 100%
        .swiper-pagination
            color: #fff
            bottom: -1rem
</style>