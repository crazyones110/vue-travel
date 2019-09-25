import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "styles/border.css"
import "styles/reset.css"
import "styles/iconfont.css"
import fastClick from "fastclick"
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false
fastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
