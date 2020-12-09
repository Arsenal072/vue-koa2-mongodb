import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import edit from '../views/edit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/home.vue')
  },
  {
    path: '/edit',
    name: 'edit',
    component: () => import(/* webpackChunkName: "edit" */ '../views/edit.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
