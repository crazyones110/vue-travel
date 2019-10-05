<template>
    <div>
        <div class="title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for="item of list" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl">
                </div>
                <div class="item-info">
                    <p class="item-info">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "weekend",
    props: {
        list: Array
    }
}
</script>

<style lang="sass" scoped>
@import ~styles/mixins.sass
.title
    line-height: .8rem
    background-color: #eee
    text-indent: .2rem
    margin-top: .2rem
.item
    .item-img-wrapper
        width: 100%
        height: 0
        padding-bottom: 37%
        .item-img
            width: 100%
    .item-info
        padding: .1rem
        .item-title
            line-height: .54rem
            font-size: .32rem
            +ellipsis()
        .item-desc
            margin-left: .1rem
            line-height: .4rem
            color: #ccc
            +ellipsis()


</style>