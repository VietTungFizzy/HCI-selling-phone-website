import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import * as resources from './resources'
import resource from './plugins/resource'

const app = createApp(App)
app.use(router)
app.use(resource, {
  resources,
  endpoint: '/static/api'
})
app.mount('#app')
