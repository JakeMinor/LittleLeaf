import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router/auto'

createApp(App)
    .use(createRouter({ history: createWebHistory() }))
    .mount('#app')
