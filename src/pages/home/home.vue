<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
        <home-recommend></home-recommend>
    </div>
</template>

<script>
import homeHeader from "./components/Header"
import homeSwiper from "./components/Swiper"
import homeIcons from "./components/Icons"
import homeRecommend from "./components/Recommend"

export default {
  name: "Home",
  components: {
      homeHeader,
      homeSwiper,
      homeIcons,
      homeRecommend
  }
}
</script>

<style>
</style>
