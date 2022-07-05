import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
Vue.use(VueRouter);


export const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/warenkorb',
        name: 'warenkorb',
        component: () => import('../views/Warenkorb.vue'),
    },
    {
        path: '/formular',
        name: 'formular',
        component: () => import('../views/Formular.vue'),
    },
    {
        path: '/einkaufsliste',
        name: 'einkaufsliste',
        component: () => import('../views/Einkaufsliste.vue'),
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
