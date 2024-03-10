import { createRouter, createWebHistory } from 'vue-router'
// здесь достаю страницы которые лежат в папке views
import MainApp from '@/views/MainApp.vue'
import Example17Page from '@/views/Example17Page.vue'
import Example18Page from '@/views/Example18Page.vue'

const router = createRouter({
    // история вкладки 
    history: createWebHistory(import.meta.env.BASE_URL),
    // пути
    routes: [
        {
            path:'/',
            name:'home',
            component: MainApp
        },
        {
            path:'/example17',
            name:'example17',
            component: Example17Page
        },
        {
            path:'/example18',
            name:'example18',
            component: Example18Page
        },
    ]
})

export default router