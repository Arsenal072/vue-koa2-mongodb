import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import edit from '../views/edit.vue'

Vue.use(VueRouter)

const routes = [
    // {
    //     path: '/',
    //     name: 'index',
    //     component: () => import( /* webpackChunkName: "index" */ '../views/index.vue')
    // },
      {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '../views/home.vue')
      },
    {
        path: '/management',
        name: 'management',
        component: () => import( /* webpackChunkName: "management" */ '../views/management.vue')
    },
    {
        path: '/edit',
        name: 'edit',
        component: () => import( /* webpackChunkName: "edit" */ '../views/edit.vue')
    },
    {
        path: '/gift',
        name: 'gift',
        component: () => import( /* webpackChunkName: "gift" */ '../views/gift.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router