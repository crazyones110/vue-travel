<template>
    <ul class="list">
        <li 
            class="item" 
            v-for="(city, key) of cities" 
            :key="key"
        >
            {{key}}
        </li>
    </ul>
</template>

<script>
export default {
    name: "alphabet",
    props: {
        cities: Object
    }
}
</script>

<style lang="sass" scoped>
@import ~styles/variables.sass
.list
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .item
        line-height: .4rem
        color: $bgColor

</style>