import Vue from 'vue'
import VueRouter from 'vue-router'
import mainPage from "@/components/mainPage";
import detailPage from "@/components/detailPage";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'mainPage',
        component: mainPage
    },
    {
        path: '/detailPage',
        name: 'detailPage',
        component: detailPage
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
