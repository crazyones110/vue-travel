<template>
    <div>
        <router-link 
            class="header-abs" 
            tag="div" 
            to="/"
            v-show="showAbs"
        >
            <div class="iconfont header-abs-back">&#xe624;</div>
        </router-link>
        <div 
            class="header-fixed" 
            v-show="!showAbs"
            :style="opacityStyle"
        >
            <router-link to="/">
                <div class="iconfont header-fixed-back">&#xe624;</div>
            </router-link>
            景点详情
        </div>
    </div>
</template>

<script>
export default {
    name: "DetailHeader",
    data () {
        return {
            showAbs: true,
            opacityStyle: {
                opacity: 0
            }
        }
    },
    methods: {
        handleScroll () {
            const top = document.documentElement.scrollTop
            if (top > 60) {
                let opacity = top / 140
                opacity = opacity > 1 ? 1 : opacity
                this.opacityStyle = { opacity }
                this.showAbs = false
            } else {
                this.showAbs = true
            }
        }
    },
    activated () {
        /*
        这样事件绑定到全局对象上是很危险的，因为不在这个组件里了，依然事件还绑定着
        少则影响性能，多则出现莫名的 bug
        所以下面的 deactivated 就是在页面离开的时候进行解绑
        */
        window.addEventListener("scroll", this.handleScroll)
    },
    deactivated () {
        window.removeEventListener("scroll", this.handleScroll)
    }
}
</script>

<style lang="sass" scoped>
@import styles/variables.sass
.header-abs
    position: absolute
    left: .2rem
    top: .2rem
    width: .8rem
    height: .8rem
    border-radius: .4rem
    background-color: rgba(0, 0, 0, .8)
    text-align: center
    line-height: .8rem
    .header-abs-back
        font-size: .4rem
        color: #fff
.header-fixed
    z-index: 2
    position: fixed
    top: 0
    left: 0
    right: 0
    // overflow: hidden
    text-align: center
    height: $headerHeight
    line-height: $headerHeight
    color: #fff
    background-color: $bgColor
    font-size: .32rem
    .header-fixed-back
        width: .64rem
        text-align: center
        font-size: .4rem
        position: absolute
        top: 0
        left: 0
        color: #fff
</style>