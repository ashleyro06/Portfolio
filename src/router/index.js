import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () =>
            import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    },
    {
        path: '/work',
        name: 'Work',
        component: () =>
            import(/* webpackChunkName: "work" */ '../views/MyWork.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
