import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultCity = "南京"
try {
  defaultCity = localStorage.city || defaultCity
} catch (e) {

}

export default new Vuex.Store({
  state: {
    city: defaultCity
  },
  // actions: {
  //   changeCity (ctx, city) {
  //     ctx.commit("changeCity", city)
  //   }
  // },
  mutations: {
    changeCity (state, city) {
      state.city = city
      try {
        localStorage.city = city
      } catch (e) {

      }
    }
  },
  getters: { // 有点类似于组件中的computed
    doubleCity (state) {
      return state.city + " " + state.city
    }
  }
})
