import microApp from '@micro-zoe/micro-app'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { useAppStore } from './stores/app'
import '@quiteer/naive-extra/index.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

const store = useAppStore()
store.init()

microApp.start()
