<template>
    <ul class="list">
        <li 
            class="item" 
            v-for="item of letters" 
            :key="item"
            @click="handleLetterClick"
            @touchstart="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
            :ref="item"
        >
            {{item}}
        </li>
    </ul>
</template>

<script>
export default {
    name: "alphabet",
    props: {
        cities: Object
    },
    data () {
        return {
            touchStatus: false,
            startY: 0,
            timer: null
        }
    },
    updated () {
        this.startY = this.$refs.A[0].offsetTop
    },
    computed: {
        letters () {
            const letters = []
            for (let key in this.cities) {
                letters.push(key)
            }
            return letters
        }
    },
    methods: {
        handleLetterClick (e) {
            this.$emit("change", e.currentTarget.innerText)
        },
        handleTouchStart () {
            this.touchStatus = true
        },
        handleTouchMove (e) {
            if (this.touchStatus) {
                if (this.timer) {
                    clearTimeout(this.timer)
                } // 这里是函数节流，不是很懂
                this.timer = setTimeout(() => {
                    /* e 这个事件对象有一个touches数组
                    其中touches[0]有手指的一些信息 */
                    const touchY = e.touches[0].clientY - 79 // 这里有问题
                    const index = Math.floor((touchY - this.startY) / 20)
                    if (index >= 0 && index < this.letters.length) {
                        this.$emit("change", this.letters[index])
                    }
                }, 16)
            }
        },
        handleTouchEnd () {
            this.touchStatus = false
        },
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