<template>
  <div id="app">
    <keep-alive>
      <!-- keep-alive的作用就是 -->
      <!-- 把router-view中的组件放进内存中，切换取件时从内存中拿即可，不用重新渲染一遍了 -->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
  import Home from "./pages/home/home"
  export default {
    name: "App",
    components: {
      Home
    }
  }
</script>

<style lang="scss">

</style>
