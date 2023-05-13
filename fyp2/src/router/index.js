import { createRouter, createWebHistory } from 'vue-router'
import LoginForm from '../views/LoginForm.vue'
import SignupForm from '../views/SignupForm.vue'

const routes= [
   
   {
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