import { createApp } from 'vue'
import App from './App.vue'
import { index } from "@/router";

const app = createApp(App)
app.use(index)
app.mount('#app')
