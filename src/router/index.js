/*
 * @Descripttion: 
 * @version: 
 * @Author: jie.niu
 * @Date: 2020-07-17 16:56:25
 * @LastEditors: jie.niu
 * @LastEditTime: 2020-07-17 17:11:28
 */ 
import Vue from 'vue'
// import VueRouter from 'vue-router'
import VueRouter from '../vuerouter'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
