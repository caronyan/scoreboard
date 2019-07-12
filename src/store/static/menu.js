export default [
    {
        meta: {
            id: 0,
            icon: 'fa-home'
        },
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue')
    }, {
        meta: {
            id: 1,
            icon: 'fa-info'
        },
        path: '/about',
        name: 'About',
        component: () => import('@/views/About.vue')
    }
]