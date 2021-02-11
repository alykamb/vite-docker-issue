import 'vite/dynamic-import-polyfill'

import { createApp } from 'vue'
import { createStore } from 'vuex'

import App from './App.vue'

createApp(App)
    .use(createStore({ state: () => ({ count: 0 }) }))
    .mount('#app')
