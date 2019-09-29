<template>
  <div id="app">
    <router-view></router-view>
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
