import HeroView from '@/views/HeroView'
import SinglePageView from '@/views/SinglePageView'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: HeroView },
    { name: 'tour', path: '/tour/:id', component: SinglePageView }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router