import { createRouter, createWebHashHistory } from 'vue-router'
import UserDashboard from "@/components/user/UserDashboard";
import MerchantDashboard from "@/components/merchant/MerchantDashboard";
import PaymentDashboard from "@/components/payment/PaymentDashboard";

const routes = [
    { path: '/', component: UserDashboard },
    { path: '/merchants', component: MerchantDashboard },
    { path: '/payments', component: PaymentDashboard },
]
export const index = createRouter({
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})