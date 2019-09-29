<template>
    <div class="list wrapper" ref="wrapper">
        <div class="content">
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">南京</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div 
                        class="button-wrapper" 
                        v-for="hotCity of hotCities"
                        :key="hotCity.id"
                    >
                        <div class="button">{{hotCity.name}}</div>
                    </div>
                </div>
            </div>

            <div 
                class="area" 
                v-for="(city, key) of cities"
                :key="key"
                :ref="key"
            >
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list">
                    <div 
                        class="item border-bottom" 
                        v-for="item of city"
                        :key="item.id"
                    >
                        {{item.name}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Bscroll from "better-scroll"
export default {
    name: "cityList",
    props: {
        cities: Object,
        hotCities: Array,
        letter: String
    },
    mounted () {
        this.$nextTick(() => {
            this.scroll = new Bscroll(this.$refs.wrapper, {})
        })
    },
    watch: {
        letter () {
            if (this.letter) {
                const element = this.$refs[this.letter][0]
                this.scroll.scrollToElement(element)
            }
        }
    }
}
</script>

<style lang="sass" scoped>
@import ~styles/variables.sass
.border-topbottom
    &::before
        border-color: #ccc
    &::after
        border-color: #ccc
.border-bottom
    &::before
        border-color: #ccc
.list
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    .title
        line-height: .54rem
        background-color: #eee
        padding-left: .2rem
        color: #666
        font-size: .26rem
    .button-list
        padding: .1rem .6rem .1rem .1rem
        overflow: hidden
        .button-wrapper
            width: 33.33%
            float: left
            .button
                text-align: center
                margin: .1rem
                border: .02rem solid #ccc
                padding: .1rem 0
                border-radius: .06rem
    .item-list
        .item
            line-height: .76rem
            // color: #666
            padding-left: .2rem
</style>