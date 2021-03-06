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
  store, // 注册在根组件里，Vue会把store派发给每一个子组件
  render: h => h(App)
}).$mount('#app')
