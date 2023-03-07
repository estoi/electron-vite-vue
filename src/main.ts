import { createApp } from 'vue'
import App from './App.vue'
import './samples/node-api'

import 'uno.css'
import 'vfonts/Lato.css'

const app = createApp(App)
app.mount('#app').$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*')
})
