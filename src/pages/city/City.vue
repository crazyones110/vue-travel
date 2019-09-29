<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list 
            :cities="cities" 
            :hotCities="hotCities"
            :letter="letter"
        ></city-list>
        <city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
    </div>
</template>

<script>
import axios from "axios"
import cityHeader from "./components/Header"
import citySearch from "./components/Search"
import cityList from "./components/List"
import cityAlphabet from "./components/Alphabet"

export default {
    name: "city",
    components: {
        cityHeader,
        citySearch,
        cityList,
        cityAlphabet
    },
    data () {
        return {
            cities: {},
            hotCities: [],
            letter: ""
        }
    },
    methods: {
        getCityinfo () {
            axios.get("/api/city.json")
                .then(this.handleCityInfoSucc)
        },
        handleCityInfoSucc (res) {
            res = res.data
            if (res.ret && res.data) {
                const data = res.data
                this.cities = data.cities
                this.hotCities = data.hotCities
            }
            console.log(res)
        },
        handleLetterChange (letter) {
            this.letter = letter
        }
    },
    mounted () {
        this.getCityinfo()
    }
}
</script>

<style lang="sass" scoped>
@import ~styles/variables.sass

</style>