import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const pool = import.meta.env.VITE_APP_POOL_ID
const client = import.meta.env.VITE_APP_CLIENT_ID


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
