import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
    },
    {
      path: '/login',
      name: 'login',
      meta: { layout: 'PublicLayout' },
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue')
    }
  ]
})
