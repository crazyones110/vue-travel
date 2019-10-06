import Vue from 'vue'
import Router from 'vue-router'
import City from '@/pages/city/City'
import Home from '@/pages/home/home'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/city",
      name: "city",
      component: City
    },
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/detail/:id",
      name: "Detail",
      component: Detail
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
