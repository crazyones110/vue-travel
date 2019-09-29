<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
    </div>
</template>

<script>
import cityHeader from "./components/Header"
import citySearch from "./components/Search"

export default {
    name: "city",
    components: {
        cityHeader,
        citySearch
    }
}
</script>

<style lang="sass" scoped>
@import ~styles/variables.sass

</style>