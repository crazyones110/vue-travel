<template>
    <div>
        <home-header></home-header>
        <home-swiper :list="swiperList"></home-swiper>
        <home-icons :list="iconList"></home-icons>
        <home-recommend :list="recommendList"></home-recommend>
        <home-weekend :list="weekendList"></home-weekend>
    </div>
</template>

<script>
import homeHeader from "./components/Header"
import homeSwiper from "./components/Swiper"
import homeIcons from "./components/Icons"
import homeRecommend from "./components/Recommend"
import homeWeekend from "./components/Weekend"
import axios from "axios"
import { mapState } from "vuex"

export default {
    name: "Home",
    components: {
        homeHeader,
        homeSwiper,
        homeIcons,
        homeRecommend,
        homeWeekend,
    },
    computed: {
        ...mapState(["city"])
    },
    data () {
        return {
            // city: "",
            swiperList: [],
            iconList: [],
            recommendList: [],
            weekendList: [],
            lastCity: ""
        }
    },
    methods: {
        getHomeInfo () {
            axios.get(`/api/index.json?city=${this.city}`)
                .then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc (res) {
            res = res.data
            if (res.ret && res.data) {
                const data = res.data
                // this.city = data.city
                this.swiperList = data.swiperList
                this.iconList = data.iconList
                this.recommendList = data.recommendList
                this.weekendList = data.weekendList
            }
            console.log(res)
        }
    },
    mounted () {
        // console.log("mounted")
        // 因为用了 keep-alive，所以即使切换回 home 组件，也不会 mounted 的了
        this.lastCity = this.city
        this.getHomeInfo()
    },
    activated () {
        if (this.lastCity !== this.city) {
            // lastCity 是临时缓存上一次城市的变量
            this.lastCity = this.city
            this.getHomeInfo()
        }
        // console.log("activated")
        // 当页面重新被显示的时候，就会 activated
        // 判断这次的城市时候和上次的相同，若不同，再发一次ajax请求
    }
}
</script>

<style>
</style>
