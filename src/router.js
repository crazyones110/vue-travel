import Vue from 'vue'
import Router from 'vue-router'
import City from '@/pages/city/City'
import Home from '@/pages/home/home'

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
  ]
})
