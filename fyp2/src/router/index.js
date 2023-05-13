import { createRouter, createWebHistory } from "vue-router"
import Product from "../views/Product"
import Home from "../views/Home"

const routes= [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/product',
        name: 'Product',
        component: Product
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router