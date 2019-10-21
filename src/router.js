import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('./views/Home')
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('./views/About.vue')
        },
        {
            path: '/Home',
            name: 'Home',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('./views/Home')
        },
        {
            path: '/SingCalender',
            name: 'SingCalender',
            component: () => import('./views/SingCalender')
        },
        {
            path: '/SignUp',
            name: 'SignUp',
            component: () => import('./views/SignUp')
        },
        {
            path: '/Notification',
            name: 'Notification',
            component: () => import('./views/Notification')
        },
        {
            path: '/SingShow',
            name: 'SingShow',
            component: () => import('./views/SingShow')
        }
    ]
})
