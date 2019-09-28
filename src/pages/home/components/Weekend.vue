<template>
    <div>
        <div class="title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
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
    data () {
        return {
            recommendList: [
                {
                    id: "0001",
                    imgUrl: "http://img1.qunarzz.com/sight/source/1505/f1/ae9d4299b8aaea.jpg_r_640x214_0c555905.jpg",
                    title: "南京必打卡",
                    desc: "看尽王侯将相荣辱成败，六朝金粉潮起潮落"
                },
                {
                    id: "0002",
                    imgUrl: "http://img1.qunarzz.com/sight/source/1505/f1/ae9d4299b8aaea.jpg_r_640x214_0c555905.jpg",
                    title: "南京必打卡",
                    desc: "看尽王侯将相荣辱成败，六朝金粉潮起潮落"
                },
                {
                    id: "0003",
                    imgUrl: "http://img1.qunarzz.com/sight/source/1505/f1/ae9d4299b8aaea.jpg_r_640x214_0c555905.jpg",
                    title: "南京必打卡",
                    desc: "看尽王侯将相荣辱成败，六朝金粉潮起潮落"
                }
            ]
        }
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