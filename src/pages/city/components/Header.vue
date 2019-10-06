<template>
    <div class="header">
        城市选择
        <router-link to="/">
            <div class="iconfont icon-back">&#xe624;</div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: "cityHeader"
}
</script>

<style lang="sass" scoped>
@import styles/variables.sass
.header
    overflow: hidden
    text-align: center
    height: $headerHeight
    line-height: $headerHeight
    color: #fff
    background-color: $bgColor
    font-size: .32rem
    position: relative
    .icon-back
        width: .64rem
        text-align: center
        font-size: .4rem
        position: absolute
        top: 0
        left: 0
        color: #fff
</style>