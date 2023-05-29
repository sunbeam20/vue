import { createRouter, createWebHistory } from "vue-router"
import Product from "../views/Product.vue"
import Home from "../views/Home.vue"
import LoginForm from "../views/LoginForm.vue"
import SignupForm from "../views/SignupForm.vue"
import Results from "../views/Results.vue"
// import Cart from "../views/Cart.vue"
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/Product/:id',
        name: 'Product',
        component: Product,
        props: true,
    },
    {
        path: '/LoginForm',
        name: 'LoginForm',
        component: LoginForm,
    },
    {
        path: '/SignupForm',
        name: 'SignupForm',
        component: SignupForm,
    },
    {
        path: '/Results',
        name: 'Results',
        component: Results,
    },
    // {
    //     path: '/Cart',
    //     name: 'Cart',
    //     component: Cart
    // },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
