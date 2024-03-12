import { createRouter, createWebHistory } from 'vue-router'
// здесь достаю страницы которые лежат в папке views
import MainApp from '@/views/MainApp.vue'
import Example18Page from '@/views/Example18Page.vue'
import Example19Page from '@/views/Example19Page.vue'

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
            path:'/example18',
            name:'example18',
            component: Example18Page
        },
        {
            path:'/example19',
            name:'example19',
            component: Example19Page
        },
    ]
})

export default router