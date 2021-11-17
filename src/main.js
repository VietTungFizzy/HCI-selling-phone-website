import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/index.css'
window.$ = window.jQuery = require('jquery');

createApp(App).use(store).use(router).mount('#app')
