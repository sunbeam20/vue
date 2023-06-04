import { createRouter, createWebHistory } from "vue-router"
import Product from "../views/Product.vue"
import Home from "../views/Home.vue"
import LoginForm from "../views/LoginForm.vue"
import SignupForm from "../views/SignupForm.vue"
import CartPage from "../views/CartPage.vue"
import Checkout from "../views/Checkout.vue"
import SellerLogin from "../views/Seller/SellerLogin.vue"
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
        component: SignupForm
    },
    {
        path: '/Results',
        name: 'Results',
        component: Results,
    },
    {
        path: '/CartPage',
        name: 'CartPage',
        component: CartPage,
        
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
    routes,
})

export default router
