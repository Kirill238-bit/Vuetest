import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/pages/Main.vue'
import Popup from '@/pages/Popup.vue'

const routes=[
    {
        path:'/',
        component:Main
    },
    {
        path:'/popup',
        component:Popup
    }
]

const router = createRouter({
    routes,
    history:createWebHistory()
})

export default router;