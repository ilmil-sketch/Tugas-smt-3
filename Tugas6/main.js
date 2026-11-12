import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Membuat instance aplikasi Vue
const app = createApp(App)

// Mengaktifkan Pinia (State Management) dan Vue Router
app.use(createPinia())
app.use(router)

// Menghubungkan aplikasi ke elemen #app di index.html
app.mount('#app')