import { createApp } from 'vue'
import App from './App.vue'
import { index } from "@/router";
import axios from "axios";

const app = createApp(App)
app.use(index)
app.mount('#app')
axios.defaults.baseURL = 'https://alexandrchumakin-payment-app.builtwithdark.com';