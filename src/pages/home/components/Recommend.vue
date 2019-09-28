<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
                <img class="item-img" :src="item.imgUrl">
                <div class="item-info">
                    <p class="item-info">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "recommend",
    data () {
        return {
            recommendList: [
                {
                    id: "0001",
                    imgUrl: "http://img1.qunarzz.com/sight/p0/1708/59/590a86e10429fb37a3.water.jpg_200x200_6406edb5.jpg",
                    title: "伏热花海庄园",
                    desc: "花的海洋，人间仙境"
                },
                {
                    id: "0002",
                    imgUrl: "http://img1.qunarzz.com/sight/p0/1708/59/590a86e10429fb37a3.water.jpg_200x200_6406edb5.jpg",
                    title: "伏热花海庄园",
                    desc: "花的海洋，人间仙境"
                },
                {
                    id: "0003",
                    imgUrl: "http://img1.qunarzz.com/sight/p0/1708/59/590a86e10429fb37a3.water.jpg_200x200_6406edb5.jpg",
                    title: "伏热花海庄园",
                    desc: "花的海洋，人间仙境"
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
    display: flex
    height: 1.9rem
    overflow: hidden
    .item-img
        width: 1.7rem
        height: 1.7rem
        padding: .1rem
    .item-info
        flex: 1
        padding: .1rem
        min-width: 0
        .item-title
            line-height: .54rem
            font-size: .32rem
            +ellipsis()
        .item-desc
            margin-left: .1rem
            line-height: .4rem
            color: #ccc
            +ellipsis()
        .item-button
            +ellipsis()
            margin-left: .1rem
            line-height: .44rem
            margin-top: .16rem
            color: #fff
            background-color: #ff9300
            padding: 0 .2rem
            border-radius: .06rem


</style>