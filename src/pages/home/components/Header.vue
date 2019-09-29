<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont icon-back">&#xe624;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            输入城市/景点/游玩主题
        </div>
        <router-link to="/city">
            <div class="header-right">
                {{this.doubleCity}}
                <span class="iconfont icon-down">&#xe64a;</span>
            </div>
        </router-link>
    </div>
</template>

<script>
import { mapState, mapGetters } from "vuex"
export default {
    name: "homeHeader",
    computed: {
        ...mapState(["city"]),
        ...mapGetters(["doubleCity"])
    }
}
</script>

<style lang="sass" scoped>
@import "~styles/variables.sass"
.header
    display: flex
    line-height: $headerHeight
    background-color: $bgColor
    color: #fff
    .header-left
        width: .64rem
        float: left
        .icon-back
            text-align: center
    .header-right
        color: #fff
        min-width: 1.04rem
        padding: 0 .1rem
        float: right
        text-align: center
        .icon-down
            font-size: .24rem
            margin-left: -.04rem
    .header-input
        padding-left: .2rem
        flex: 1
        background-color: #fff
        border-radius: .1rem
        margin:
            top: .12rem
            left: .2rem
        line-height: .62rem
        height: .62rem
        color: #ccc

        

</style>


