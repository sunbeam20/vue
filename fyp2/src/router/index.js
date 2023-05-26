import { createRouter, createWebHistory } from "vue-router"
import Product from "../views/Product"
import Home from "../views/Home"
import LoginForm from "../views/LoginForm.vue"
import SignupForm from "../views/SignupForm.vue"
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
    },{
        path: '/LoginForm',
        name: 'LoginForm',
        component: LoginForm
       },
       {
        path: '/SignupForm',
        name: 'SignupForm',
        component: SignupForm
       }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
