import { createRouter, createWebHistory } from "vue-router"
import Product from "../views/Product"
import Home from "../views/Home"
import LoginForm from "../views/LoginForm.vue"
import SignupForm from "../views/SignupForm.vue"
import CartPage from "../views/CartPage.vue"
import Checkout from "../views/Checkout.vue"
import SellerLogin from "../views/Seller/SellerLogin.vue"
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
       },
       {
        path: '/CartPage',
        name: 'CartPage',
        component: CartPage
       },
       {
        path: '/Checkout',
        name: 'Checkout',
        component: Checkout
       },
       {
        path: '/SellerLogin',
        name: 'SellerLogin',
        component: SellerLogin
       },
   
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
