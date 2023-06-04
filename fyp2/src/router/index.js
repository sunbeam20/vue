import { createRouter, createWebHistory } from "vue-router"
import Product from "../views/Product"
import Home from "../views/Home"
import LoginForm from "../views/LoginForm.vue"
import SignupForm from "../views/SignupForm.vue"
import CartPage from "../views/CartPage.vue"
import Checkout from "../views/Checkout.vue"
import SellerLogin from "../views/Seller/SellerLogin.vue"
import SellerSignup from "../views/Seller/SellerSignup.vue"
import SellerHome from "../views/Seller/SellerHome.vue"

const routes= [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            group: 'customer'
        }
    },
    {
        path: '/product',
        name: 'Product',
        component: Product,
        meta: {
            group: 'customer'
        }
    },
    {
        path: '/LoginForm',
        name: 'LoginForm',
        component: LoginForm,
        meta: {
            group: 'customer'
        }
       },

       {
        path: '/SignupForm',
        name: 'SignupForm',
        component: SignupForm,
        meta: {
            group: 'customer'
        }
       },
       {
        path: '/CartPage',
        name: 'CartPage',
        component: CartPage,
        meta: {
            group: 'customer'
        }
       },
       {
        path: '/Checkout',
        name: 'Checkout',
        component: Checkout,
        meta: {
            group: 'customer'
        }
       },
       {
        path: '/SellerLogin',
        name: 'SellerLogin',
        component: SellerLogin,
        meta: {
            group: 'seller'
        }
       },
       {
        path: '/SellerSignup',
        name: 'SellerSignup',
        component: SellerSignup,
        meta: {
            group: 'seller'
       },
    },

    {
    path: '/SellerHome',
    name: 'SellerHome',
    component: SellerHome,
    meta: {
        group: 'seller'
    
    }, 
    },
   
    
    
      
   
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
